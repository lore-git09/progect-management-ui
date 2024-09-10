import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { share } from 'rxjs';
import { SharedModule } from 'src/shared/shared.module';
import { HeaderComponent } from 'src/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeeModule } from 'src/employee/employee.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectModule } from 'src/project/project.module';
import { EmployeeListComponent } from 'src/employee/employee-list/employee-list.component';
import { EmployeeComponent } from 'src/employee/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    EmployeeModule,
    ProjectModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
