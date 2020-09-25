// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Other Modules
import { GoogleMapsModule } from '@angular/google-maps'

// Components
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

// Services
import { ExternalApisService } from './transport-api.service';
import { MapComponent } from './components/main/map/map.component';
import { DeparturesListingsComponent } from './components/main/departures-listings/departures-listings.component'

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    MapComponent,
    DeparturesListingsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ],
  providers: [
    ExternalApisService
  ]
})
export class DeparturesModule { }
