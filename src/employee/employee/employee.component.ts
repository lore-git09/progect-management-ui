import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
          id: [result ? result.id : null],
        firstName:  [result  ? result.firstName : ''],
        lastName: [result  ? result.lastName : ''],
        email:  [result  ? result.email : '']
        })  
      }) 
    }

    this.employeeForm = this.fb.group({
      id: '',
      firstName:  ['', [Validators.required]],
      lastName:  ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
   
    console.log("mode: "+this.mode)
  }


  onSubmit(){
   // this.modal.close(this.employeeForm.value);
   this.employeeService.createEmployee(this.employeeForm.value);
   

  }

  
}


