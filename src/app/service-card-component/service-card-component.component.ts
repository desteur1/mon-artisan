import { Component, signal } from '@angular/core';
import { ArtisanDataService } from '../artisan-data.service';
import { Artisan } from '../models/artisan.model'; // interface
import { CommonModule } from '@angular/common'; // to be able to use ngFor,ngIf and other, there are to iterate over a collection(like an array or an iterate object) and dynamically create a set of elements in the dom for each item in the collection
import { ItemcardComponent } from '../itemcard/itemcard.component';

@Component({
  selector: 'app-service-card-component',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './service-card-component.component.html',
  styleUrl: './service-card-component.component.scss',
})
export class ServiceCardComponentComponent {
  title = signal('Artisans Service'); // signal() is the new method of binding data
  serviceItems: Artisan[] = []; // property to hold the fetch items

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
  }
}
