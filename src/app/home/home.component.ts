import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemcardComponent } from '../itemcard/itemcard.component';
import { Artisan } from '../models/artisan.model'; // interface folder for the type
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtisanDataService } from '../artisan-data.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ItemcardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'Comment Trouver Ton Artisan';

  employeeOfTheMonth: Artisan[] = []; //property to hold the fetch items
  searchInput: string = ''; // Store the search term
  searchTerm: string = ''; // Initialize the searchTerm property

  artisans: Artisan[] = [];
  constructor(
    private artisanDataService: ArtisanDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Get all artisans from the service
    this.artisans = this.artisanDataService.getItems();
    // console.log('Artisans fetched:', this.artisans); // Debug fetched data

    // Sort by note (highest first) and select the top 3
    this.employeeOfTheMonth = [...this.artisans]
      .sort((a, b) => b.note - a.note) // Sort by note in descending order
      .slice(0, 3); // Take the top 3 artisans
    // console.log('Employee of the month:', this.employeeOfTheMonth); // Debug employee list
  }
  onSearchClick(): void {
    const searchTerm = this.searchInput.trim();
    if (searchTerm) {
      this.artisanDataService.updateSearchTerm(searchTerm); // ✅ Send search term when button is clicked
      this.router.navigate(['/search-results'], {
        queryParams: { term: searchTerm },
      }); // Navigate to the search results page
    }
    this.searchInput = ''; // ✅ Clear input after search
  }
}
