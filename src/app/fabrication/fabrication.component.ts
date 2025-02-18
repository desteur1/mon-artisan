import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ArtisanDataService } from '../artisan-data.service';
import { Artisan } from '../models/artisan.model'; // interface
import { CommonModule } from '@angular/common'; // to be able to use ngFor,ngIf and other, there are to iterate over a collection(like an array or an iterate object) and dynamically create a set of elements in the dom for each item in the collection
import { ItemcardComponent } from '../itemcard/itemcard.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fabrication',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.scss'],
})
export class FabricationComponent implements OnInit, OnDestroy {
  title = signal('Artisans Fabrication'); // signal() is the new method of binding data
  searchTerm: string = ''; // Store the search term
  searchInput: string = ''; // stores the input field value

  searchSubscription!: Subscription;
  artisans: Artisan[] = [];
  fabricationItems: Artisan[] = []; // property to hold the fetch items

  constructor(private artisanDataService: ArtisanDataService) {}

  ngOnInit() {
    //fetch items for the fabrication department

    this.fabricationItems =
      this.artisanDataService.getItemByDepartment('Fabrication');
    // console.log('Fetched Fabrication Items:', this.fabricationItems); // Debug log to check fetched items

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
      return this.fabricationItems; // Show all if search is empty
    }
    return this.fabricationItems.filter(
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
