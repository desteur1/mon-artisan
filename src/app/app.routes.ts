import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { BatimentComponent } from './batiment/batiment.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { ServiceCardComponentComponent } from './service-card-component/service-card-component.component';
import { FicheDetailArtisantComponent } from './fiche-detail-artisant/fiche-detail-artisant.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { MentionLegaleComponent } from './components/mention-legale/mention-legale.component';
import { DonneesPersonnelleComponent } from './components/donnees-personnelle/donnees-personnelle.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { AccesibiliteComponent } from './components/accesibilite/accesibilite.component';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alimentation', component: AlimentationComponent },
  { path: 'batiment', component: BatimentComponent },
  { path: 'fabrication', component: FabricationComponent },
  { path: 'service', component: ServiceCardComponentComponent },
  { path: 'search-results', component: SearchResultComponent },
  {
    path: 'fiche-detail-artisan/:nom',
    component: FicheDetailArtisantComponent,
  },
  { path: 'mention-legale', component: MentionLegaleComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'accessibilite', component: AccesibiliteComponent },
  { path: 'donnees-personnelle', component: DonneesPersonnelleComponent },
  { path: '**', component: UnknownPageComponent },
];
