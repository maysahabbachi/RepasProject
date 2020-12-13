import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { RepasComponent } from './repas/repas.component';
import { HeaderComponent } from './header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SpecialiteService} from './shared/specialite.service';
import {SpecialiteAffichageComponent} from './specialite/specialite-affichage.component';
import {SpecialiteStartComponent} from './specialite/specialite-start.component';
import { SpecialiteDetailsComponent } from './specialite/specialite-details.component';
import { RepasStartComponent } from './repas/repas-start.component';
import { RepasAffichageComponent } from './repas/repas-affichage.component';
import {RepasService} from './shared/repas.service';
import {RouterModule} from '@angular/router';
import { DetailComponent } from './repas/detail.component';
import {RepasDetailsComponent} from './repas-details/repas-details.component';
import {RepasDetailsService} from './shared/repas-details.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterRepasComponent } from './filter/filter-repas/filter-repas.component';
import {FilterPipe} from './filter/filter-repas/filter-repas';
import {UserService} from './shared/user.service';
import {ToastrModule} from 'ngx-toastr';
import { ReclamationComponent } from './reclamation/reclamation/reclamation.component';
import { ReclamationListComponent } from './reclamation/reclamation-list/reclamation-list.component';
import { ReclamationStartComponent } from './reclamation/reclamation-start/reclamation-start.component';
import {ReclamationService} from './shared/reclamation.service';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ServiceContactService} from './shared/service-contact.service';
import {TodayeComponent} from './weathers/todaye/todaye.component';
import {WeatherStartComponent} from './weathers/weather-start/weather-start.component';
import {WeatherService} from './weathers/weather.service';
import {AgmCoreModule} from '@agm/core';






@NgModule({
  declarations: [
    AppComponent,
    SpecialiteComponent,
    RepasComponent,
    RepasDetailsComponent,
    HeaderComponent,
    SpecialiteAffichageComponent,
    SpecialiteStartComponent,
    SpecialiteDetailsComponent,
    RepasStartComponent,
    RepasAffichageComponent,
    DetailComponent,
    FilterRepasComponent,
    FilterPipe,
    ReclamationComponent,
    ReclamationListComponent,
    ReclamationStartComponent,
    PageNotFoundComponent,
    TodayeComponent,
    WeatherStartComponent

  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCc6L0sDtBQCXXZwcoZUvplCDtg3Burg3M'
    })

  ],
  providers: [SpecialiteService, RepasService, RepasDetailsService, ReclamationService , ServiceContactService , WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

