import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministrativeLayoutComponent } from './layouts/administrative-layout/administrative-layout.component';
import { MainComponentsModule } from './main-components/main-components.module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatSidenavModule } from '@angular/material/sidenav';

import { PagesModule } from './pages/pages.module';
import { DashboardsModule } from './dashboards/dashboards.module';

import {HashLocationStrategy} from '@angular/common'
import {LocationStrategy} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    AdministrativeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainComponentsModule,
    FlexLayoutModule,
    PagesModule,
    HttpClientModule,
    MatSidenavModule,
    DashboardsModule
    
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }

    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
