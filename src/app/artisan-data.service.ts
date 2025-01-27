import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArtisanDataService {
  private items = [
    // Batiment
    {
      nom: 'Bernard',
      note: 4.5,
      specialite: 'Plomberie',
      localisation: 'Aix-en-Provence',
      department: 'Batiment',
    },
    {
      nom: 'Moreau',
      note: 4.8,
      specialite: 'Menuiserie',
      localisation: "L'Ile-sur-la-Sorgue",
      department: 'Batiment',
    },
    {
      nom: 'Richard',
      note: 4.2,
      specialite: 'Électricité',
      localisation: 'Marseille',
      department: 'Batiment',
    },
    {
      nom: 'Martin',
      note: 4.3,
      specialite: 'Maçonnerie',
      localisation: 'Gourdes',
      department: 'Batiment',
    },

    // Service
    {
      nom: 'Michel',
      note: 4.4,
      specialite: 'Décoration',
      localisation: 'Montpellier',
      department: 'Service',
    },
    {
      nom: 'Roux',
      note: 3.7,
      specialite: 'Ébénisterie',
      localisation: 'Les Beaux de Provence',
      department: 'Service',
    },
    {
      nom: 'Lambert',
      note: 3.8,
      specialite: 'Cordonnerie',
      localisation: 'Toulon',
      department: 'Service',
    },
    {
      nom: 'David',
      note: 4.0,
      specialite: 'Couture',
      localisation: 'Saint-Paul de Vence',
      department: 'Service',
    },

    // Alimentation
    {
      nom: 'Petit',
      note: 3.8,
      specialite: 'Jardinage',
      localisation: 'Saint-Rémy-de-Provence',
      department: 'Alimentation',
    },
    {
      nom: 'Durand',
      note: 4.6,
      specialite: 'Boulangerie',
      localisation: 'Moustiers-Sainte-Marie',
      department: 'Alimentation',
    },
    {
      nom: 'Simon',
      note: 4.9,
      specialite: 'Vitraillerie',
      localisation: 'Avignon',
      department: 'Alimentation',
    },
    {
      nom: 'Laurent',
      note: 4.7,
      specialite: 'Cuisine',
      localisation: 'Saint-Tropez',
      department: 'Alimentation',
    },

    // Fabrication
    {
      nom: 'Robert',
      note: 4.2,
      specialite: 'Serrurerie',
      localisation: 'Antibes',
      department: 'Fabrication',
    },
    {
      nom: 'Alain',
      note: 3.6,
      specialite: 'Carrelage',
      localisation: 'Roussillon',
      department: 'Fabrication',
    },
    {
      nom: 'Dubois',
      note: 4.1,
      specialite: 'Peinture',
      localisation: 'Uzès',
      department: 'Fabrication',
    },
    {
      nom: 'Thomas',
      note: 3.9,
      specialite: 'Mécanique',
      localisation: 'Toulouse',
      department: 'Fabrication',
    },
  ];

  // Fetch all items
  getItems() {
    return this.items;
  }
  // fetch items by department
  getItemByDepartment(department: string) {
    return this.items.filter(
      (item) => item.department.toLowerCase() === department.toLowerCase()
    );
  }

  // Fetch items for a specific page
  getItemsByPage(page: number) {
    const itemsPerPage = 4; // Number of items per page
    const startIndex = (page - 1) * itemsPerPage; // Calculate the starting index
    return this.items.slice(startIndex, startIndex + itemsPerPage); // Return the items for the requested page
  }

  // Fetch an item by its index
  getItemByIndex(index: number) {
    return this.items[index];
  }
  constructor() {}
}
