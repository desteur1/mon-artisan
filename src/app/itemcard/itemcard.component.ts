import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Artisan } from '../models/artisan.model';

@Component({
  selector: 'app-itemcard',
  imports: [CommonModule],
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss'],
})
export class ItemcardComponent {
  // @Input() customClass: string = '';
  @Input() customStyle: { [key: string]: string } = {}; // to accepte customStyle from the parent component(alimentation) for inline styles
  @Input() item!: Artisan; //Input property to accept item data
  @Input() index!: number; //Input property for item index

  fullstars: number[] = [];
  halfstar: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    //This prevents errors if item is missing or note is undefined.
    if (!this.item) {
      console.warn('ItemCardComponent initialized without an item.');
    }
    // Debugging: Check if index is received
    console.log('Received Item:', this.item);
    console.log('Received Index:', this.index);

    // // Check if item or index is undefined and log a warning instead of throwing an error
    // if (!this.item || this.index === undefined) {
    //   console.warn('ItemcardComponent initialized with incomplete inputs:', {
    //     item: this.item,
    //     index: this.index,
    //   });
    //   return; // Exit early to prevent errors
    // }
    // const full = Math.floor(this.item.note); // fetch the note
    // this.fullstars = Array(full).fill(0); // create an array for full stars
    // this.halfstar = this.item.note % 1 !== 0; // check if there's a half star
    this.fullstars = this.getFullStars(this.item.note);
    this.halfstar = this.hasHalfStar(this.item.note);
  }

  // Method to get the number of full stars
  getFullStars(note: number): number[] {
    return new Array(Math.floor(note)).fill(0); // Return an array of full stars based on the note
  }
  // Method to check if there's a half star
  hasHalfStar(note: number): boolean {
    return note % 1 !== 0; // Return true if the note has a decimal part
  }
  //navigate to item details
  goToDetails() {
    console.log('Navigating to details for index:', this.index); // Log the index to ensure it is passed
    if (Number.isInteger(this.index) && this.index >= 0) {
      // Allow all valid indices, including 0
      // Navigating to the detail page with the index as a URL parameter
      this.router.navigate(['/fiche-detail-artisan', this.index]);
    }
  }
}
