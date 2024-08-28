import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProjectDTO } from "../model/projectDTO";
import { Injectable } from "@angular/core";
import { EmployeeDTO } from "../model/employeeDTO";


@Injectable({
  providedIn: 'root'
})

export class ProjectService{

    private projectsUrl = 'http://localhost:8080/api/project/';  // URL to web api

    // httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };

    constructor(
        private http: HttpClient,
       ) { }

       getProjects(): Observable<ProjectDTO[]> {
        return this.http.get<ProjectDTO[]>(this.projectsUrl);
      }

      findProject(projectId:string):Observable<ProjectDTO>{
        const url= `${this.projectsUrl}${projectId}`
        return this.http.get<ProjectDTO>(url);
      }

      createProject(newProject:ProjectDTO):Observable<void>{
        return this.http.post<void>(this.projectsUrl, newProject);
      }

      updateProject(projectId: string, updatedProject: ProjectDTO): Observable<ProjectDTO> {
        const url = `${this.projectsUrl}${projectId}`;
        return this.http.put<ProjectDTO>(url, updatedProject);
      }

      deleteProject(projectId: string): Observable<void> {
        const url = `${this.projectsUrl}${projectId}`;
        return this.http.delete<void>(url);
      }



}