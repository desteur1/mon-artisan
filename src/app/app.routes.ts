import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { BatimentComponent } from './batiment/batiment.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alimentation', component: AlimentationComponent },
  { path: 'batiment', component: BatimentComponent },
];
