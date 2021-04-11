import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { Ten12Component } from './ten12/ten12.component';

const routes: Routes = [
  {
    path:'',
    component:HubComponent
  },
  {
    path: 'ten12',
    component: Ten12Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
