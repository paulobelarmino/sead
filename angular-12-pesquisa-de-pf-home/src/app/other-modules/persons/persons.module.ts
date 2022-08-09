import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { PersonsRoutingModule } from './persons-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { homeComponent } from './home/home.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    homeComponent,
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
  ]
})
export class PersonsModule { }
