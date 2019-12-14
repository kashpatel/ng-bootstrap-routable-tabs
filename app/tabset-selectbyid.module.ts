import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { NgbdTabsetSelectbyid } from './tabset-selectbyid';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { RoutingModule } from './routing/routing.module';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [BrowserModule, NgbModule, RoutingModule],
  declarations: [NgbdTabsetSelectbyid, Demo1Component, Demo2Component, Demo3Component, TabsComponent],
  exports: [NgbdTabsetSelectbyid],
  bootstrap: [NgbdTabsetSelectbyid]
})
export class NgbdTabsetSelectbyidModule {}
