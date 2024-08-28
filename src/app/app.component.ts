import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectListComponent } from "../public/project-list/project-list.component";
import { ProjectService } from '../service/project.service';
import { ProjectDTO } from '../model/projectDTO';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, HomeComponent, HeaderComponent,RouterOutlet,] // Aggiungi CommonModule qui
})

export class AppComponent implements OnInit {
  title = 'progect-management';


 projectList:ProjectDTO[]=[];
  constructor(private projectService: ProjectService){

  }
  ngOnInit(): void {
   this.getProjects();


  }


  getProjects(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projectList = data;
    });
  }

}
