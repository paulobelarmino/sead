import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativeLayoutComponent } from './layouts/administrative-layout/administrative-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdministrativeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/administrative-layout/administrative-layout.module').then(m => m.AdministrativeLayoutModule)
      },
     
    ]
  },

  {
    
    path: 'login',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      
  },
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
