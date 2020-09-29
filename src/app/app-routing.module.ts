import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './departures/components/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { MainComponent } from './departures/components/main/main.component';

const routes: Routes = [
  {
    path: 'departures',
    // redirectTo: 'departures',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: 'departures',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-in-service',
  },
  {
    path: 'not-in-service',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
