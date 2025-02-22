import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Artisan } from '../models/artisan.model';

@Component({
  selector: 'app-itemcard',
  imports: [CommonModule], // Imports CommonModule to use common directives like *ngIf, *ngFor, etc.
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss'],
})
export class ItemcardComponent {
  // @Input() customClass: string = '';
  @Input() customStyle: { [key: string]: string } = {}; //  accepte customStyle from the parent component(alimentation) for inline styles
  @Input() item!: Artisan; //Input property to accept item data from a parent component
  @Input() index!: number; //Input property for item index of the item

  fullstars: number[] = []; // Array to store the number of full stars to display
  halfstar: boolean = false; // Boolean to determine whether to show a half-star
  constructor(private router: Router) {} // Injects Angular's Router service to handle navigation

  ngOnInit() {
    //This prevents errors if item is missing or note is undefined.
    if (!this.item) {
      console.warn('ItemCardComponent initialized without an item.'); // Warn if `item` is missing
    }
    // Debugging: Check if index is received
    // console.log('Received Item:', this.item);

    // Calculates full and half stars based on the artisan's rating
    this.fullstars = this.getFullStars(this.item.note);
    this.halfstar = this.hasHalfStar(this.item.note);
  }

  /**
   * Method to calculate the number of full stars for rating display
   * @param {number} note - The rating of the artisan
   * @returns {number[]} - An array representing full stars
   */
  getFullStars(note: number): number[] {
    return new Array(Math.floor(note)).fill(0); // Return an array of full stars based on the note
  }

  /**
   * Method to check if a half-star should be displayed
   * @param {number} note - The rating of the artisan
   * @returns {boolean} - True if the rating has a decimal part, otherwise false
   */
  hasHalfStar(note: number): boolean {
    return note % 1 !== 0; // Return true if the note has a decimal part
  }
  //navigate to item details
  goToDetails() {
    if (this.item && this.item.nom) {
      /* Ensure item and nom are defined
       console.log('Navigating to details for:', this.item.nom); // Debugging: Log navigation info
       if (Number.isInteger(this.item.nom) && this.index >= 0)*/

      this.router.navigate(['/fiche-detail-artisan', this.item.nom]); // Navigate using `nom`
    } else {
      console.error('Item or item is underfined.'); // Log error if `item.nom` is missing
    }
  }
}
