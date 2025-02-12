import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; // Import Location service to handle back navigation
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives like *ngIf and *ngFor
import { FormsModule } from '@angular/forms'; //Syncs data between the form input and the component variable automatically (Enables Two-Way Data Binding).

import { Artisan } from '../models/artisan.model';
import { ArtisanDataService } from '../artisan-data.service';
import { ItemcardComponent } from '../itemcard/itemcard.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-detail-artisant',
  imports: [CommonModule, FormsModule, ItemcardComponent],
  templateUrl: './fiche-detail-artisant.component.html',
  styleUrls: ['./fiche-detail-artisant.component.scss'],
})
export class FicheDetailArtisantComponent implements OnInit {
  item: Artisan | undefined; //to hold artisan details
  index: number | undefined; // to hold the index of the artisan

  contact = {
    name: '',
    subject: '',
    message: '',
  };

  constructor(
    private route: ActivatedRoute, // to capture the route params
    private artisanService: ArtisanDataService, // to fetch artisan data
    private location: Location //inject the location service
  ) {}

  ngOnInit(): void {
    // Retrieve the 'nom' parameter from the route
    const nomParam = this.route.snapshot.paramMap.get('nom');
    if (nomParam) {
      // Find the artisan that matches the retrieved 'nom' parameter
      this.item = this.artisanService
        .getItems()
        .find((a) => a.nom === nomParam);
      // Debugging: Log the found item
      console.log('Found Artisan:', this.item);
    } else {
      // Log an error if no 'nom' parameter is found in the route
      console.error('No artisan found in route parameters');
    }
  }
  // Navigate back to the previous page using the Location service
  goBack(): void {
    this.location.back(); // Navigate back to the previous page
  }
  //function to handle form submission
  onSubmit(): void {
    //check if all fields are filled
    if (this.contact.name && this.contact.subject && this.contact.message) {
      console.log('Message envoyé:', this.contact); // log the contact form data

      alert('Votre message a été envoyé avec succès ! '); //show a success message

      // Reset the form fields after submission
      this.contact = { name: '', subject: '', message: '' };
    } else {
      alert('Veuillez remplir tous les champs .'); //Alert user if fields are missing
    }
  }
}
