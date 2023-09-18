import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

const routes: Routes = [
  {
    path: '',    
    children: [
        {
            path: 'example1',
            component: Example1Component,
            data: {
                title: 'Example 1'               
            },
          },
          {
            path: 'example2',
            component: Example2Component,
            data: {
                title: 'Example 2'               
            },
          }
        ]
  },
  {
    path: 'exercises',
    loadChildren: () => import('./exercises/exercises.module')
    .then(m => m.ExercisesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
