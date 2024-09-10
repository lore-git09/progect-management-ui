import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeDTO } from "src/models/employeeDTO";


@Injectable({
    providedIn: 'root'
  })
  
  export class EmployeeService{
  
      private employeesUrl = 'http://localhost:8080/api/employee/';  // URL to web api
  
      // httpOptions = {
      //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      // };
  
      constructor(
          private http: HttpClient,
         ) { }
  
         getEmployees(): Observable<EmployeeDTO[]> {
          return this.http.get<EmployeeDTO[]>(this.employeesUrl);
        }


        updateEmployee(employeeId: string, updatedEmployee: EmployeeDTO): Observable<EmployeeDTO> {
          // Costruisce l'URL includendo l'ID dell'impiegato
          const url = `${this.employeesUrl}${employeeId}`;
        
          // Esegue la chiamata HTTP PUT verso il backend, passando i dati aggiornati
          return this.http.put<EmployeeDTO>(url, updatedEmployee);
        }

        findEmployee(employeeId: string): Observable<EmployeeDTO> {
          const url = `${this.employeesUrl}${employeeId}`;
          return this.http.get<EmployeeDTO>(url);
        }

        createEmployee(newEmployee: EmployeeDTO): Observable<EmployeeDTO> {
          return this.http.post<EmployeeDTO>(this.employeesUrl, newEmployee);
        }

        deleteEmployee(employeeId: string): Observable<void> {
          const url = `${this.employeesUrl}${employeeId}`;
          return this.http.delete<void>(url);
        }
        
        
        


        
  
  
  
  }
