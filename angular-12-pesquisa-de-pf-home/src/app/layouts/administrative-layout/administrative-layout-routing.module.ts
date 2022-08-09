import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { 
    path: 'dashboard',
    loadChildren: () => import('../../dashboards/dashboards.module').then(m => m.DashboardsModule)
      

  },
  { 
    path: 'pessoas', 
    loadChildren: () => import('../../other-modules/persons/persons.module').then(m => m.PersonsModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeLayoutRoutingModule { }

