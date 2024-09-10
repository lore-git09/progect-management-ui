import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project-component/project.component';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent }, // Percorso per la lista degli impiegati
  { path: 'projects/:id', component: ProjectComponent }, // Percorso per il dettaglio dell'impiegato con parametro id

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
