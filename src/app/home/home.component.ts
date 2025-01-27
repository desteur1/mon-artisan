import { Component } from '@angular/core';
import { ItemcardComponent } from '../itemcard/itemcard.component';
import { CommonModule } from '@angular/common';
import { ArtisanDataService } from '../artisan-data.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Comment Trouver Ton Artisan';
  // topEmployees: any[] = []; // to store "employés du mois"
  employeeOfTheMonth: any[] = [];

  constructor(private ArtisanDataService: ArtisanDataService) {}
  ngOnInit(): void {
    //get top 3 employees base on the data from artisandataservice
    const items = this.ArtisanDataService.getItems();
    this.employeeOfTheMonth = items.length >= 3 ? items.slice(0, 3) : items; // top 3 items
  }
  // {
  //   this.loadTopEmployees();
  // }
  // //load top employees (e.g base on the top rating)
  // private loadTopEmployees(): void {
  //   const allArtisans = this.ArtisanDataService.getItems();
  //   this.topEmployees = allArtisans
  //     .sort((a, b) => b.note - a.note) //Sort artisans by rating (highest first)
  //     .slice(0, 3); // take the top 3 artisans
  // }
}
