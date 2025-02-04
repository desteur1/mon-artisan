import { Component } from '@angular/core';
import { ItemcardComponent } from '../itemcard/itemcard.component';
import { Artisan } from '../models/artisan.model'; // interface folder for the type
import { CommonModule } from '@angular/common';
import { ArtisanDataService } from '../artisan-data.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'Comment Trouver Ton Artisan';
  // topEmployees: any[] = []; // to store "employés du mois"
  employeeOfTheMonth: Artisan[] = []; //property to hold the fetch items
  constructor(private ArtisanDataService: ArtisanDataService) {}
  ngOnInit(): void {
    // Get all artisans from the service
    const items = this.ArtisanDataService.getItems();
    console.log('Artisans fetched:', items); // Debug fetched data

    // Sort by note (highest first) and select the top 3
    this.employeeOfTheMonth = items
      .sort((a, b) => b.note - a.note) // Sort by note in descending order
      .slice(0, 3); // Take the top 3 artisans
  }
}
