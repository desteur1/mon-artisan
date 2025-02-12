import { Component, signal } from '@angular/core';
import { ArtisanDataService } from '../artisan-data.service';
import { Artisan } from '../models/artisan.model'; // interface
import { CommonModule } from '@angular/common'; // to be able to use ngFor,ngIf and other, there are to iterate over a collection(like an array or an iterate object) and dynamically create a set of elements in the dom for each item in the collection
import { ItemcardComponent } from '../itemcard/itemcard.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-card-component',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './service-card-component.component.html',
  styleUrl: './service-card-component.component.scss',
})
export class ServiceCardComponentComponent {
  searchTerm: string = ''; // Store the search term
  searchInput: string = ''; // stores the input field value
  title = signal('Artisans Service'); // signal() is the new method of binding data
  serviceItems: Artisan[] = []; // property to hold the fetch items
  searchSubscription!: Subscription;

  constructor(private artisanDataService: ArtisanDataService) {}

  ngOnInit() {
    //fetch items for the service department

    this.serviceItems = this.artisanDataService.getItemByDepartment('Service');
    console.log('Fetched Fabrication Items:', this.serviceItems);
    if (this.serviceItems.length > 0) {
      console.log('✅ serviceItems is populated');
    } else {
      console.warn('⚠️ No service items found!');
    }
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
      return this.serviceItems; // Show all if search is empty
    }
    return this.serviceItems.filter(
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
