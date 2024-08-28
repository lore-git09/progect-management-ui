import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { EmployeeDTO } from '../../../model/employeeDTO';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from '../employee.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {

  employeesList:EmployeeDTO[] =[];
  public employee: EmployeeDTO | undefined;
  
  constructor(
    private employeeService: EmployeeService,
    private modalService:NgbModal,
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
