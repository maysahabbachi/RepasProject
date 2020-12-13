import {RouterModule, Routes} from '@angular/router';
import {RepasDetailsComponent} from './repas-details.component';




export const REPASDETAILS_ROUTES: Routes = [

  {path: ':id', component: RepasDetailsComponent},
];
