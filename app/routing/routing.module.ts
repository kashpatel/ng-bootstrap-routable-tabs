import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from '../demo1/demo1.component';
import { Demo2Component } from '../demo2/demo2.component';
import { Demo3Component } from '../demo3/demo3.component';
import { TabsComponent } from '../tabs/tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
       {
        path: 'demo1',
        component: Demo1Component,
        outlet: "tabs"
      },
      {
        path: 'demo2',
        component: Demo2Component,
        outlet: "tabs"
      },
      {
        path: 'demo3',
        component: Demo3Component,
        outlet: "tabs"
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class RoutingModule { }