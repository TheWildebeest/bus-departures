// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

// custom modules
import { DeparturesModule } from './departures/departures.module';




@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    DeparturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
