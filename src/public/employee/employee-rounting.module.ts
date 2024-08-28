import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [

  { path: '', redirectTo: '/employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/new', component: EmployeeComponent},
    { path: 'employees/:id', component: EmployeeComponent },
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRountingModule { }
