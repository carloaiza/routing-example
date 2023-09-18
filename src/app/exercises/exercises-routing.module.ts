import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise1Component } from './exercise1/exercise1.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'exe1',
        component: Exercise1Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
