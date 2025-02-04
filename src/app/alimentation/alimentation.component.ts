import { Component, signal } from '@angular/core';
import { ArtisanDataService } from '../artisan-data.service';
import { Artisan } from '../models/artisan.model'; // interface
import { CommonModule } from '@angular/common'; // to be able to use ngFor,ngIf and other, there are to iterate over a collection(like an array or an iterate object) and dynamically create a set of elements in the dom for each item in the collection
import { ItemcardComponent } from '../itemcard/itemcard.component';

@Component({
  selector: 'app-alimentation',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './alimentation.component.html',
  styleUrl: './alimentation.component.scss',
})
export class AlimentationComponent {
  title = signal('Artisans Alimentaion'); // signal() is the new method of binding data
  alimentationItems: Artisan[] = []; // property to hold the fetch items

  constructor(private artisanDataService: ArtisanDataService) {}

  ngOnInit() {
    //fetch items for the alimentation department

    this.alimentationItems =
      this.artisanDataService.getItemByDepartment('Alimentation');
    console.log('Fetched Fabrication Items:', this.alimentationItems);
  }
}
