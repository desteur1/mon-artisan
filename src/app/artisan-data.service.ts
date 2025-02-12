import { Injectable } from '@angular/core';
import { Artisan } from './models/artisan.model'; // interface
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app
})
export class ArtisanDataService {
  private items: Artisan[] = [
    // Batiment category
    {
      nom: 'Bernard',
      note: 4.5,
      specialite: 'Plomberie',
      localisation: 'Aix-en-Provence',
      department: 'Batiment',
      aboutMe:
        'Plombier depuis plus de 10 ans, je suis spécialisé dans les installations et réparations.',
    },
    {
      nom: 'Moreau',
      note: 4.8,
      specialite: 'Menuiserie',
      localisation: "L'Ile-sur-la-Sorgue",
      department: 'Batiment',
      aboutMe:
        'Ébéniste passionné, je crée des meubles et aménagements sur mesure.',
    },
    {
      nom: 'Richard',
      note: 4.2,
      specialite: 'Électricité',
      localisation: 'Marseille',
      department: 'Batiment',
      aboutMe:
        "Électricien expérimenté, j'interviens aussi bien en résidentiel qu'en tertiaire.",
    },
    {
      nom: 'Martin',
      note: 4.3,
      specialite: 'Maçonnerie',
      localisation: 'Gourdes',
      department: 'Batiment',
      aboutMe:
        'Maçon passionné, je réalise des constructions en pierre et en béton.',
    },

    // Service category
    {
      nom: 'Michel',
      note: 4.4,
      specialite: 'Décoration',
      localisation: 'Montpellier',
      department: 'Service',
      aboutMe:
        'Je transforme les espaces avec un style unique et personnalisé.',
    },
    {
      nom: 'Roux',
      note: 3.7,
      specialite: 'Ébénisterie',
      localisation: 'Les Beaux de Provence',
      department: 'Service',
      aboutMe:
        'Artisan ébéniste, je crée des meubles sur mesure et restaure les anciens.',
    },
    {
      nom: 'Lambert',
      note: 3.8,
      specialite: 'Cordonnerie',
      localisation: 'Toulon',
      department: 'Service',
      aboutMe: 'Cordonner passionné, je répare et personnalise vos chaussures.',
    },
    {
      nom: 'David',
      note: 4.0,
      specialite: 'Couture',
      localisation: 'Saint-Paul de Vence',
      department: 'Service',
      aboutMe:
        'Je confectionne des vêtements sur mesure et effectue des retouches.',
    },

    // Alimentation category
    {
      nom: 'Petit',
      note: 3.8,
      specialite: 'Jardinage',
      localisation: 'Saint-Rémy-de-Provence',
      department: 'Alimentation',
      aboutMe:
        'Jardinier passionné, je privilégie des méthodes biologiques et durables.',
    },
    {
      nom: 'Durand',
      note: 4.6,
      specialite: 'Boulangerie',
      localisation: 'Moustiers-Sainte-Marie',
      department: 'Alimentation',
      aboutMe:
        'Boulanger depuis 15 ans, je prépare du pain artisanal avec des ingrédients locaux.',
    },
    {
      nom: 'Simon',
      note: 4.9,
      specialite: 'Vitraillerie',
      localisation: 'Avignon',
      department: 'Alimentation',
      aboutMe:
        'Artisan vitrailliste, je conçois et restaure des vitraux d’exception.',
    },
    {
      nom: 'Laurent',
      note: 4.7,
      specialite: 'Cuisine',
      localisation: 'Saint-Tropez',
      department: 'Alimentation',
      aboutMe:
        'Chef cuisinier, je mets en avant les saveurs méditerranéennes avec des produits frais.',
    },

    // Fabrication category
    {
      nom: 'Robert',
      note: 4.2,
      specialite: 'Serrurerie',
      localisation: 'Antibes',
      department: 'Fabrication',
      aboutMe:
        'Serrurier depuis 15 ans, je propose des solutions de sécurité efficaces.',
    },
    {
      nom: 'Alain',
      note: 3.6,
      specialite: 'Carrelage',
      localisation: 'Roussillon',
      department: 'Fabrication',
      aboutMe:
        'Carreleur minutieux, j’assure des finitions précises et durables.',
    },
    {
      nom: 'Dubois',
      note: 4.1,
      specialite: 'Peinture',
      localisation: 'Uzès',
      department: 'Fabrication',
      aboutMe:
        'Peintre en bâtiment, j’apporte couleur et modernité à vos espaces.',
    },
    {
      nom: 'Thomas',
      note: 3.9,
      specialite: 'Mécanique',
      localisation: 'Toulouse',
      department: 'Fabrication',
      aboutMe:
        'Mécanicien passionné, je répare et optimise toutes sortes de machines.',
    },
  ];
  // BehaviorSubject to store the search term (used for reactive search functionality)
  private searchTerm = new BehaviorSubject<string>(''); // Stores search input
  searchTerm$ = this.searchTerm.asObservable(); // Expose as observable

  /**
   * Fetches all artisan items.
   * @returns Array of all artisans
   */
  getItems() {
    return this.items;
  }

  /**
   * Updates the search term for filtering artisans.
   * @param term - The search term entered by the user
   */
  updateSearchTerm(term: string): void {
    this.searchTerm.next(term); // Updates the BehaviorSubject with the new search term
  }
  // fetch items by department
  /**
   * Filters artisans by department.
   * @param department - The department to filter artisans by
   * @returns Array of artisans belonging to the specified department
   */
  getItemByDepartment(department: string): Artisan[] {
    const filteredItems = this.items.filter(
      (item) => item.department.toLowerCase() === department.toLowerCase()
    );
    console.log(`Items found for department "${department}":`, filteredItems);
    return filteredItems;
  }

  // // Fetch items for a specific page
  // getItemsByPage(page: number) {
  //   if (page < 1) {
  //     //Ensure valid input for methods like getItemsByPage (e.g., page > 0).
  //     console.error('Invalid page number');
  //     return [];
  //   }
  //   const itemsPerPage = 4; // Number of items per page
  //   const startIndex = (page - 1) * itemsPerPage; // Calculate the starting index
  //   return this.items.slice(startIndex, startIndex + itemsPerPage); // Return the items for the requested page
  // }

  // // Fetch an item by its index
  // getItemByIndex(index: number) {
  //   if (index < 0 || index >= this.items.length) {
  //     console.error('Index out of range'); // error handling for cases where a department or index might not exist
  //     return undefined;
  //   }
  //   return this.items[index];
  // }

  // new method to search artisans by name,specialty, or location
  /**
   * Searches for artisans by name, specialty, or location.
   * @param searchTerm - The term entered by the user for searching
   * @returns Array of artisans that match the search criteria
   */
  searchArtisans(searchTerm: string): Artisan[] {
    if (!searchTerm.trim()) {
      return []; // return an empty array if the search term is empty
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search
    return this.items.filter(
      // Check if the artisan's name, specialty, or location includes the search term (case-insensitive)
      (artisan) =>
        artisan.nom.toLowerCase().includes(lowercasedSearchTerm) ||
        artisan.specialite.toLowerCase().includes(lowercasedSearchTerm) ||
        artisan.localisation.toLowerCase().includes(lowercasedSearchTerm)
    );
  }

  constructor() {}
}
