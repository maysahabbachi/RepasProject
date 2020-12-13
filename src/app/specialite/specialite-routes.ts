import {RouterModule, Routes} from '@angular/router';
import {SpecialiteDetailsComponent} from './specialite-details.component';
import {REPAS_ROUTES} from '../repas/repas-routes';



export const SPECIALITE_ROUTES: Routes = [

  {path: ':idSpec', component: SpecialiteDetailsComponent, children: REPAS_ROUTES},
];
