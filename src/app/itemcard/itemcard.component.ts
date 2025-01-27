import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itemcard',
  imports: [CommonModule],
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss'],
})
export class ItemcardComponent {
  // @Input() customClass: string = '';
  @Input() customStyle: { [key: string]: string } = {}; // to accepte customStyle from the parent component(alimentation) for inline styles
  @Input() item: any; //Input property to accept item data
  @Input() index!: number; //Input property for item index

  fullstars: number[] = [];
  halfstar: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    const full = Math.floor(this.item.note); // fetch the note
    this.fullstars = Array(full).fill(0); // create an array for full stars
    this.halfstar = this.item.note % 1 !== 0; // check if there's a half star
  }

  // Method to get the number of full stars
  getFullStars(note: number): number[] {
    return new Array(Math.floor(note)); // Return an array of full stars based on the note
  }
  // Method to check if there's a half star
  hasHalfStar(note: number): boolean {
    return note % 1 !== 0; // Return true if the note has a decimal part
  }
  //navigate to item details
}
