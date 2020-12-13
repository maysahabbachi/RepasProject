import {RouterModule, Routes} from '@angular/router';
import {REPASDETAILS_ROUTES} from '../repas-details/repasDetails-routes';
import {DetailComponent} from './detail.component';




export const REPAS_ROUTES: Routes = [

  {path: ':idRep', component: DetailComponent,  children: REPASDETAILS_ROUTES},
];
