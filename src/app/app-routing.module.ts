import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpecialiteComponent} from './specialite/specialite.component';
import {SPECIALITE_ROUTES} from './specialite/specialite-routes';
import {FilterRepasComponent} from './filter/filter-repas/filter-repas.component';
import {ReclamationStartComponent} from './reclamation/reclamation-start/reclamation-start.component';
import {WeatherStartComponent} from './weathers/weather-start/weather-start.component';




const routes: Routes = [
  {path: '', redirectTo: '/specialite', pathMatch: 'full'},
  {path: 'specialite', component: SpecialiteComponent, children: SPECIALITE_ROUTES},
  {path: 'pipes', component: FilterRepasComponent},
  {path: 'reclamation', component: ReclamationStartComponent},
  {path: 'weather', component: WeatherStartComponent},



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
