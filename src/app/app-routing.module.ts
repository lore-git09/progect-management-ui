import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from '../public/project-list/project-list.component';
import { EmployeeListComponent } from '../public/employee/employee-list/employee-list.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [


  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'employees', component: EmployeeListComponent },
//   { path: 'projects/new', component: ProjectCreateComponent },
//   { path: 'projects/:id', component: ProjectDetailComponent },
//   { path: 'projects/:id/edit', component: ProjectEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
