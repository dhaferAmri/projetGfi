import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCollaborateursComponent} from './list-collaborateurs/list-collaborateurs.component';

const routes: Routes = [
  {
    path: 'listCollaborateurs',
    component: ListCollaborateursComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
