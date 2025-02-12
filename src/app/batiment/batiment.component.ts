import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemcardComponent } from '../itemcard/itemcard.component';
import { Artisan } from '../models/artisan.model';
import { ArtisanDataService } from '../artisan-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-batiment',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss',
})
export class BatimentComponent {
  searchTerm: string = ''; // Store the search term
  searchInput: string = ''; // stores the input field value
  title = signal('Artisans Bâtiment'); // signal() is the new method of binding data
  batimentItems: Artisan[] = []; // property to hold the fetch items
  searchSubscription!: Subscription;

  constructor(private artisanDataService: ArtisanDataService) {}

  ngOnInit() {
    //fetch items for the batiment department

    this.batimentItems =
      this.artisanDataService.getItemByDepartment('Batiment');
    console.log('Fetched Fabrication Items:', this.batimentItems);
    // ✅ Subscribe to searchTerm$ and filter items dynamically
    this.searchSubscription = this.artisanDataService.searchTerm$.subscribe(
      (searchTerm) => {
        this.searchTerm = searchTerm; //  // Store latest search term
      }
    );
  }

  // ✅ Getter method to dynamically filter artisans
  get filteredArtisans(): Artisan[] {
    if (!this.searchTerm.trim()) {
      return this.batimentItems; // Show all if search is empty
    }
    return this.batimentItems.filter(
      (artisan) =>
        artisan.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        artisan.specialite
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        artisan.localisation
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
    );
  }
  // ✅ Method to clear the search
  clearSearch() {
    this.artisanDataService.updateSearchTerm(''); // Reset search term
  }

  ngOnDestroy() {
    // ✅ Unsubscribe to avoid memory leaks
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
      console.log('Unsubscribed from searchTerm$ to prevent memory leaks.');
    }
  }
}
