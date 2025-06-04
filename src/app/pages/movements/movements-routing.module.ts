import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMovementsComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMovementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementsRoutingModule { }
