import { Component, Input } from '@angular/core';
import { Artisan } from '../models/artisan.model';
import { CommonModule } from '@angular/common';
import { ItemcardComponent } from '../itemcard/itemcard.component';
import { ArtisanDataService } from '../artisan-data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-result',
  imports: [CommonModule, ItemcardComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss',
})
export class SearchResultComponent {
  @Input() searchResults: Artisan[] = [];
  @Input() searchTerm: string = '';

  constructor(
    private artisanDataService: ArtisanDataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['term'] || '';
      this.searchResults = this.artisanDataService.searchArtisans(
        this.searchTerm
      );
    });
  }
  // Method to navigate to the previous page
  goBack() {
    this.location.back(); // Use Location service to go back to the previous page
  }
}
