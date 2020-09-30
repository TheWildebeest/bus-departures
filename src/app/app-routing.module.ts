import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './departures/components/main/main.component';
import { DeparturesComponent } from './departures/departures.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { MainComponent } from './departures/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'departures'
  },
  {
    path: 'departures',
    loadChildren: () => import('./departures/departures.module')
      .then(module => module.DeparturesModule)
      .catch(e => console.log('Error loading Departures Module.\n\n') + e)
  },
  {
    path: 'not-in-service',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'departures',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
