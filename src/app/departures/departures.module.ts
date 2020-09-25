// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Other Modules
import { GoogleMapsModule } from '@angular/google-maps'

// Components
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

// Services
import { ExternalApisService } from './transport-api.service';
import { MapComponent } from './components/main/map/map.component';
import { DeparturesListingsComponent } from './components/main/departures-listings/departures-listings.component';
import { SearchBoxComponent } from './components/main/search-box/search-box.component'

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    MapComponent,
    DeparturesListingsComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    MapComponent,
    DeparturesListingsComponent,
    SearchBoxComponent
  ],
  providers: [
    ExternalApisService
  ]
})
export class DeparturesModule { }
