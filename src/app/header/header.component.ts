import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isSearchVisible: boolean = false; // tracks visisbility of the search bar
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible; // Toggle visibility
  }
}
