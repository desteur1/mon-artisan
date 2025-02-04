import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemcardComponent } from '../itemcard/itemcard.component';
import { Artisan } from '../models/artisan.model';
import { ArtisanDataService } from '../artisan-data.service';

@Component({
  selector: 'app-batiment',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss',
})
export class BatimentComponent {
  title = signal('Artisans Bâtiment'); // signal() is the new method of binding data
  batimentItems: Artisan[] = []; // property to hold the fetch items

  constructor(private artisanDataService: ArtisanDataService) {}

  ngOnInit() {
    //fetch items for the batiment department

    this.batimentItems =
      this.artisanDataService.getItemByDepartment('Batiment');
    console.log('Fetched Fabrication Items:', this.batimentItems);
  }
}
