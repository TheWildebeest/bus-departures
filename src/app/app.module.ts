// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// custom modules
import { DeparturesModule } from './departures/departures.module';

// components
import { AppComponent } from './app.component';

// routing
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeparturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
