<!-- # MonArtisan

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page. -->

# MonArtisan

MonArtisan est une application web basée sur Angular qui aide les utilisateurs à trouver et explorer des artisans locaux. L'application permet de rechercher des artisans, de visualiser leurs détails et de consulter les artisans les mieux notés.

Ce projet a été généré en utilisant la [CLI Angular](https://github.com/angular/angular-cli) version 19.1.4.

## Fonctionnalités

- **Affichage des artisans** : Affiche les artisans by department.
- **Recherche dynamique** : Permet de rechercher des artisans par nom, spécialité et localisation.Les résultats sont filtrés en temps réel en fonction du terme de recherche et sont affichés sur la page de résultats(search-result)
- **Artisan du mois** : Affiche les trois artisans les mieux notés.
- **Page 404** : Si un utilisateur accède à une page inexistante, il est redirigé vers une page d'erreur.
- **Détails des artisans** : Permet de voir les détails d'un artisan sur une page dédiée.

## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés :

- **Node.js** (version 14.x ou supérieure)
- **Angular CLI** (version 19.1.4 ou supérieure)

### Cloner le dépôt

Clonez le projet depuis GitHub en exécutant la commande suivante dans votre terminal :

```bash
git clone https://github.com/desteur1/mon-artisan.git
cd mon-artisan
```

### Installer les dépendances

npm install

### Démarrer le serveur de développement

ng serve

### Scaffolding du code

La CLI Angular inclut des outils puissants pour générer du code automatiquement. Pour générer un nouveau composant, exécutez :

```
ng generate component nom-du-composant

```

Pour une liste complète des schémas disponibles (comme composants, directives, ou pipes), exécutez :

```
ng generate --help

```

### Construction du projet

ng build

### Exécution des tests unitaires

ng test

### Tests de bout en bout (e2e)

ng e2e

### Sécurisation des Données Utilisateur

- Dans le cadre de l'application MonArtisan, nous avons mis en place une protection contre les attaques de type Cross-Site Scripting (XSS). Cela concerne spécifiquement l'affichage de contenu généré par l'utilisateur, comme les descriptions des artisans. Pour assurer la sécurité des données, nous utilisons le service DomSanitizer d'Angular, qui permet de nettoyer et sécuriser le contenu HTML avant de l'afficher dans l'application.

- Lorsqu'un utilisateur effectue une recherche, le terme de recherche est sanitisé avant d'être utilisé. Cela permet d'éliminer les caractères potentiellement dangereux, comme les balises HTML (<, >, &), qui pourraient être utilisés pour injecter du code malveillant.
