import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { SharedModule } from 'src/shared/shared.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeComponent
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   


  

  ]
})
export class EmployeeModule { }
