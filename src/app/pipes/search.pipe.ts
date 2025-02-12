import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../models/artisan.model';

@Pipe({
  name: 'search',
  pure: false, // Make it impure so it updates automatically when data changes
})
export class SearchPipe implements PipeTransform {
  // transform(items: Artisan[], searchTerm: string): Artisan[] {
  //   console.log('Empty searchTerm - returning all items');
  //   if (!searchTerm) {
  //     return items; // return all items if search term is empty
  //   }
  //   const lowercasedSearchTerm = searchTerm.toLowerCase();
  //   return items.filter((artisan) => {
  //     artisan.nom.toLowerCase().includes(lowercasedSearchTerm) ||
  //       artisan.specialite.toLowerCase().includes(lowercasedSearchTerm) ||
  //       artisan.localisation.toLowerCase().includes(lowercasedSearchTerm);
  //   });
  // }
  transform(artisan: Artisan[] | null, searchTerm: string): Artisan[] {
    if (!artisan) return []; // ensure artisan is not null
    if (!searchTerm) return artisan; //if no search query, return the full list

    return artisan.filter((a) =>
      a.specialite.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
