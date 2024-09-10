
import { EmployeeDTO } from 'src/models/employeeDTO';
import { EmployeeService } from 'src/service/employee.service';
import { EmployeeComponent } from '../employee/employee.component';

import { Component, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

  employeesList:EmployeeDTO[] =[];
  public employee: EmployeeDTO | undefined;
  public mode: string| undefined;
  
  constructor(
    private employeeService: EmployeeService,
    private modalService:NgbModal,
    private router: Router,
  ){

  }
  
  
  ngOnInit(): void {
   this.getEmployees();
   
  }


  getEmployees():void{
    this.employeeService.getEmployees().subscribe((result : EmployeeDTO[])=>{        
this.employeesList = result
    })
  }

createEmployee(){
this.router.navigate(["employees/create"],{
  queryParams: { mode: "CREATE" }
});

}


updateEmployee(employeeId: string){ // importantante questo carratere `'
  this.router.navigate([`employees/${employeeId}/update`],{
    queryParams: { mode: "UPDATE" } // Passiamo "mode" come parametro di query
 });
  }


  readEmployee(employeeId: string){ // importantante questo carratere `'
    this.router.navigate([`employees/${employeeId}/read`],{
      queryParams: { mode: "READ" } // Passiamo "mode" come parametro di query
   });
    }



  openEmployeeModal(mode: 'CREATE' | 'UPDATE', emp?: EmployeeDTO){

    const modalRef = this.modalService.open(EmployeeComponent, { size:'l'
    })

      this.employee=emp;
      modalRef.componentInstance.mode = mode 
      modalRef.componentInstance.employee=emp
      let empl =null ;
      modalRef.result.then((result) => {
        if (result) {
           empl = result
          if(mode==='CREATE'){
            this.employeeService.createEmployee(empl).subscribe({});

          }
          if(mode==='UPDATE'){

          }
        console.log(result);
        }
      })
     /* modalRef.componentInstance.employeeOutput.subscribe((receivedEmployee: EmployeeDTO) => {
        console.log(receivedEmployee);
        })*/
  
    }
    

}


