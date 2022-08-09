import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { homeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {
    path: 'cadastrar', component: CreateComponent
  },
  {
    path: 'listar', component: ListComponent
  },
  {
    path: 'editar/:id', component: CreateComponent
  },
  {
    path: 'home', component: homeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
