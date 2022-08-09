import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAdminDashboardComponent } from './main-admin-dashboard/main-admin-dashboard.component';
import { PersonsDashboardComponent } from './persons-dashboard/persons-dashboard.component';

import {MatCardModule} from '@angular/material/card'
import { DashboardsRoutingModule } from './dashboards-routing.module';

import {MatIconModule} from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    MainAdminDashboardComponent,
    PersonsDashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    
    DashboardsRoutingModule,
    
  ]
})
export class DashboardsModule { }
