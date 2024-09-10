import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from 'src/employee/employee-list/employee-list.component';
import { HomeComponent } from 'src/home/home.component';
import { ProjectListComponent } from 'src/project/project-list/project-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'employees',
    loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('../project/project.module').then(m => m.ProjectModule)
  },
 
  { path: 'home', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
