// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DeparturesRoutingModule } from './departures-routing.module'


// Components
import { DeparturesComponent } from './departures.component';
import { DeparturesListingsComponent } from './components/main/departures-listings/departures-listings.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/main/map/map.component';
import { MainComponent } from './components/main/main.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


// Services
import { ExternalApisService } from './transport-api.service';
import { TimetableComponent } from './components/timetable/timetable.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    MapComponent,
    SearchBoxComponent,
    DeparturesListingsComponent,
    DeparturesComponent,
    TimetableComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DeparturesRoutingModule
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    MapComponent,
    SearchBoxComponent,
    DeparturesListingsComponent
  ],
  providers: [
    ExternalApisService
  ]
})
export class DeparturesModule { }
