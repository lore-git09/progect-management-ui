import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError } from 'rxjs';
import { EmployeeDTO } from 'src/models/employeeDTO';
import { EmployeeService } from 'src/service/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  employeeForm!: FormGroup;

 public mode: string | undefined ;
 public id:any | undefined ;
 employee! : EmployeeDTO;


  @Output() employeeOutput: EventEmitter<EmployeeDTO> = new EventEmitter();

 
 constructor(
 // public modal: NgbActiveModal,
  private fb: FormBuilder,
  private employeeService: EmployeeService,
  private route: ActivatedRoute

)
 
  {
 }
 

  ngOnInit(): void {

    // Assegniamo il valore di `mode` dai parametri di query
    this.route.queryParams.subscribe(params => {
      this.mode = params['mode'];
    });

    if(this.mode==="UPDATE" || this.mode==="READ" ){
      this.id=this.route.snapshot.paramMap.get('id');//scrivo id perche nell url ho id come variabile
      this.employeeService.findEmployee(this.id).subscribe(result=>{
     
        this.employeeForm.patchValue({
        firstName:  [result  ? result.firstName : ''],
        lastName: [result  ? result.lastName : ''],
        email:  [result  ? result.email : '']
        })  
      }) 
    }

    this.employeeForm = new FormGroup({
      firstName : new FormControl ('', Validators.required),
      lastName:   new FormControl ('', Validators.required),
      email:  new FormControl ('',[ Validators.required, Validators.email]),
    });
   
  }


  onSubmit(){ 
   this.employee =new EmployeeDTO();
   console.log(this.employee);
  const formValues = this.employeeForm.value;

this.employee.email = Array.isArray(formValues.email) ? formValues.email[0] : formValues.email;
this.employee.firstName = Array.isArray(formValues.firstName) ? formValues.firstName[0] : formValues.firstName;
this.employee.lastName = Array.isArray(formValues.lastName) ? formValues.lastName[0] : formValues.lastName;
 
   if(this.mode==='CREATE'){

    this.employeeService.createEmployee(this.employee).subscribe({

      error(){
    
      }
    });

   }if(this.mode==='UPDATE'){
  this.employeeService.updateEmployee(this.id, this.employee).subscribe({

  })
  this.ngOnInit()
   }
   
   

  }



  
}


