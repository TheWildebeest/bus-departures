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
import { ExternalApisService } from './external-apis.service'

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
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
