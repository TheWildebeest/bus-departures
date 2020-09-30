import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './departures/components/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { MainComponent } from './departures/components/main/main.component';

const routes: Routes = [
  {
    path: 'departures',
    // redirectTo: 'departures',
    component: MainComponent,
    children: [
      {
        path: 'not-in-service',
        component: NotFoundComponent
      },
      {
        path: '**',
        redirectTo: 'departures'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'departures',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: 'not-in-service',
  // },
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
