import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ProjectDTO } from "../model/projectDTO";
import { ProjectService } from "../service/project.service";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule] // Aggiungi CommonModule qui
})

export class HomeComponent implements OnInit {
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
