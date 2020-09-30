import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'timetable/:service'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeparturesRoutingModule { }
