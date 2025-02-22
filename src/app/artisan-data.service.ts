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
      note: 4.3,
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
      note: 4.6,
      specialite: 'Décoration',
      localisation: 'Montpellier',
      department: 'Service',
      aboutMe:
        'Je transforme les espaces avec un style unique et personnalisé.',
    },
    {
      nom: 'Roux',
      note: 3.7,
      specialite: 'Fleuriste',
      localisation: 'Les Beaux de Provence',
      department: 'Service',
      aboutMe:
        'Créatrice florale, je compose des bouquets unique et des arrangements élégants.',
    },
    {
      nom: 'Lambert',
      note: 3.8,
      specialite: 'Coiffure',
      localisation: 'Toulon',
      department: 'Service',
      aboutMe:
        'Coiffeur passionné, je crée des coupes et styles personnalisés pour tous.',
    },
    {
      nom: 'David',
      note: 4.0,
      specialite: 'Ménage',
      localisation: 'Saint-Paul de Vence',
      department: 'Service',
      aboutMe:
        'Spécialiste du ménage, je vous offre unn service de nettoyage impeccable.',
    },

    // Alimentation category
    {
      nom: 'Petit',
      note: 3.8,
      specialite: 'Torrefacteur',
      localisation: 'Saint-Rémy-de-Provence',
      department: 'Alimentation',
      aboutMe:
        "Torréfacteur artisanal, je sélectionne et grille des cafés d'exception.",
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
      specialite: 'Épicier',
      localisation: 'Avignon',
      department: 'Alimentation',
      aboutMe:
        'Épicier passionné, je propose des produits frais et locaux chaque jour.',
    },
    {
      nom: 'Laurent',
      note: 4.7,
      specialite: 'Traiteur',
      localisation: 'Saint-Tropez',
      department: 'Alimentation',
      aboutMe:
        'Chef cuisinier, je mets en avant les saveurs méditerranéennes avec des produits frais.',
    },

    // Fabrication category
    {
      nom: 'Robert',
      note: 4.2,
      specialite: 'Textile',
      localisation: 'Antibes',
      department: 'Fabrication',
      aboutMe:
        'Artisan textile, je crée des vêtements et accessoires uniques faits main.',
    },
    {
      nom: 'Alain',
      note: 3.6,
      specialite: 'Meuble',
      localisation: 'Roussillon',
      department: 'Fabrication',
      aboutMe:
        'Menuisier expert, je conçois et fabrique des meubles sur mesure.',
    },
    {
      nom: 'Dubois',
      note: 4.1,
      specialite: 'Jouets',
      localisation: 'Uzès',
      department: 'Fabrication',
      aboutMe:
        "Créateur de jouets en bois, j'apporte joie et sécurité aux enfants.",
    },
    {
      nom: 'Thomas',
      note: 3.9,
      specialite: 'Bijoux',
      localisation: 'Toulouse',
      department: 'Fabrication',
      aboutMe:
        'Bijoutier artisan, je conçois des pièces uniques et personnalisées.',
    },
  ];

  // ✅ Define synonyms for search terms
  private synonymMap: { [key: string]: string[] } = {
    plomberie: ['plombier', 'chauffagiste', 'installation sanitaire'],
    menuiserie: ['ébéniste', 'menuisier', 'bois'],
    electricité: ['électricien', 'câblage', 'courant'],
    maçonnerie: ['maçon', 'construction', 'bâtiment'],
    décoration: ['décorateur', 'designer', 'aménagement'],
    fleuriste: [
      'fleurs',
      'plantes',
      'botanique',
      'bouquet',
      'jardinier',
      'horticulteur',
    ],
    coiffure: [
      'coiffeur',
      'coiffeuse',
      'salon',
      'hairdresser',
      'barbier',
      'coupe',
    ],
    ménage: ['nettoyage', 'entretien', 'aide ménagère'],
    torrefacteur: ['café', 'grains', 'brûlerie'],
    boulangerie: ['boulanger', 'pâtissier', 'pain', 'viennoiserie'],
    épicier: ['épices', 'herboriste'],
    traiteur: ['chef', 'cuisinier', 'cuisine', 'buffet'],
    textile: ['couture', 'tissu', 'mode', 'vêtement'],
    meuble: ['ébéniste', 'menuiserie', 'mobilier', 'bois'],
    jouets: ['artisan jouets', 'fabrication jouets', 'bois', 'création'],
    bijoux: ['bijoutier', 'joaillier', 'or', 'argent'],
  };
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
    // console.log(`Items found for department "${department}":`, filteredItems);
    return filteredItems;
  }

  // new method to search artisans by name,specialty, or location
  /**
   * Searches for artisans by name, specialty, or location.
   * @param searchTerm - The term entered by the user for searching
   * @returns Array of artisans that match the search criteria
   */
  searchArtisans(searchTerm: string): Artisan[] {
    //This is a method that takes a searchTerm (user input) and returns an array of Artisan objects that match the search.

    if (!searchTerm.trim()) {
      //If the user enters an empty search (like " "), we return nothing to avoid unnecessary filtering.
      return []; // return an empty array if the search term is empty
    }
    // This makes the search case-insensitive (so "Plombier" and "plombier" are treated the same).
    //.trim() removes extra spaces from the beginning and end.
    const lowercasedSearchTerm = searchTerm.trim().toLowerCase(); // Convert search term to lowercase for case-insensitive search

    //We use .filter() to loop through all artisans and keep only those that match.
    return this.items.filter((artisan) => {
      //We convert each artisan’s name, location, and specialty to lowercase.
      const name = artisan.nom.toLowerCase();
      const location = artisan.localisation.toLowerCase();
      const specialty = artisan.specialite.toLowerCase();

      // ✅ Direct match check (for name, location, or specialty)
      const directMatch =
        /* This checks if the search term exists inside:
The artisan's name
The artisan's location
The artisan's specialty
 */
        name.includes(lowercasedSearchTerm) ||
        location.includes(lowercasedSearchTerm) ||
        specialty.includes(lowercasedSearchTerm);

      // ✅ Synonym match check
      // this.synonymMap is a dictionary of synonyms,
      // Object.entries(this.synonymMap) converts it into an array
      //  The .some() function loops through each entry (key-value pair) to check if the search term matches a synonym.
      // Compare Search Term with Synonyms
      const synonymMatch = Object.entries(this.synonymMap).some(
        ([key, synonyms]) => {
          // const lowerKey = key.toLowerCase();
          // const lowerSynonyms = synonyms.map((syn) => syn.toLowerCase());
          return (
            (specialty.includes(key) &&
              synonyms.includes(lowercasedSearchTerm)) ||
            (synonyms.includes(specialty) && key.includes(lowercasedSearchTerm))
            // (specialty === lowerKey &&
            //   lowerSynonyms.includes(lowercasedSearchTerm)) ||
            // (lowerSynonyms.includes(specialty) &&
            //   lowerKey === lowercasedSearchTerm)
          );
        }
      );

      return directMatch || synonymMatch;
    });
  }

  constructor() {}
}
