import { Component, signal } from '@angular/core';
import { ArtisanDataService } from '../artisan-data.service';
import { Artisan } from '../models/artisan.model'; // interface
import { CommonModule } from '@angular/common'; // to be able to use ngFor,ngIf and other, there are to iterate over a collection(like an array or an iterate object) and dynamically create a set of elements in the dom for each item in the collection
import { ItemcardComponent } from '../itemcard/itemcard.component';

@Component({
  selector: 'app-fabrication',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss',
})
export class FabricationComponent {
  title = signal('Artisans Fabrication'); // signal() is the new method of binding data
  alimentationItems: Artisan[] = []; // property to hold the fetch items

  constructor(private artisanDataService: ArtisanDataService) {}

  ngOnInit() {
    //fetch items for the fabrication department

    this.alimentationItems =
      this.artisanDataService.getItemByDepartment('Fabrication');
  }
}
