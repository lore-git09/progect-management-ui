import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, 
  { path: 'list', component: EmployeeListComponent }, // Percorso per la lista degli impiegati
  { path: ':id/update', component: EmployeeComponent }, // Percorso per il dettaglio dell'impiegato con parametro id
  { path: ':id/read', component: EmployeeComponent },
  { path: 'create', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
