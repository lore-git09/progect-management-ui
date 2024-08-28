import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from '../public/project-list/project-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from '../public/employee/employee-list/employee-list.component';
import { EmployeeComponent } from '../public/employee/employee.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [  
  
  ],
  imports: [
    BrowserModule,
     HeaderComponent,
    AppRoutingModule, // Aggiungi AppRoutingModule qui
    HttpClientModule,
    ProjectListComponent,
    EmployeeListComponent,
    EmployeeComponent,
    HomeComponent,
    FormsModule,
    AppComponent ,// Importa il componente standalone qui
    CommonModule ,// Aggiungi CommonModule qui
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
