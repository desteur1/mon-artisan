import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtisanDataService } from '../artisan-data.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchInput: string = ''; // ✅ Store user input but don't update immediately

  constructor(
    private artisanDataService: ArtisanDataService,
    private router: Router
  ) {}

  onSearchClick() {
    const searchTerm = this.searchInput.trim();
    if (searchTerm) {
      this.artisanDataService.updateSearchTerm(searchTerm); // ✅ Send search term when button is clicked
      this.router.navigate(['/search-results'], {
        queryParams: { term: searchTerm },
      }); // Navigate to the search results page
    }
    this.searchInput = ''; // ✅ Clear input after search
  }

  isSearchVisible: boolean = false; // tracks visisbility of the search bar
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible; // Toggle visibility
  }
}
