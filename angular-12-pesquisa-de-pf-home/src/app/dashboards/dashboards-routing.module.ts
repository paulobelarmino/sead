import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainAdminDashboardComponent} from './main-admin-dashboard/main-admin-dashboard.component';
import { PersonsDashboardComponent } from './persons-dashboard/persons-dashboard.component';

export const routes: Routes = [
  {
    path: '', component: MainAdminDashboardComponent, data: {breadcrumb: '/Home'}
  },
  {
    path: 'pessoas', component: PersonsDashboardComponent, data: {breadcrumb: '/Pessoas'}
  },
  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DashboardsRoutingModule { }
