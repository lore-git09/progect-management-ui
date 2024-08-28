import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { ProjectDTO } from '../../model/projectDTO';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent} from '../project/project.component';


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  providers: [
    HttpClientModule,
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit{

  projects: ProjectDTO[] = [];
  newProject:ProjectDTO | undefined;

  constructor(
   private  projectService: ProjectService,
   public modalService: NgbModal
  ){
    

  }
  ngOnInit(): void {

    this.getProjects();
   
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  createProject(){
    const modalRef = this.modalService.open(ProjectComponent ,{size:'L'})
  modalRef.componentInstance.mode='CREATE'
    modalRef.result.then((result) => {
    
        let newProject = result; 
        this.projectService.createProject(newProject).subscribe({
          next: (response) => {
            console.log('Progetto creato con successo', response);
         
          },
          error: (err) => {
            console.error('Errore durante la creazione del progetto', err);
          }
        });

    }).catch((error) => {
      console.log('Modale chiusa senza creare un progetto', error);
    });

  }


  updateProject(pro: ProjectDTO){
    const modalRef = this.modalService.open(ProjectComponent ,{size:'L'})

  modalRef.componentInstance.mode ='UPDATE';
  modalRef.componentInstance.project = pro;
  modalRef.result.then((updatedProject) => {
    this.projectService.createProject(updatedProject).subscribe({
      next: (response) => {
        console.log('Progetto modificato con successo', response);
     
      },
      error: (err) => {
        console.error('Errore durante la modifica del progetto', err);
      }
    });

}).catch((error) => {
  console.log('Modale chiusa senza aggiornare un progetto', error);
});

}





}
