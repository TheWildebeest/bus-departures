// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


// Components
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MapComponent } from './components/main/map/map.component';
import { DeparturesListingsComponent } from './components/main/departures-listings/departures-listings.component';


// Services
import { ExternalApisService } from './transport-api.service';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    MapComponent,
    SearchBoxComponent,
    DeparturesListingsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
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
