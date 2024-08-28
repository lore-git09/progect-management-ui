import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';
import { EmployeeDTO } from '../../model/employeeDTO';
import { NgbActiveModal, NgbModal, NgbModalModule, NgbModalRef, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule,  NgbModule,NgbModalModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  @Input() public employee :EmployeeDTO | undefined; // oggetto in ingresso 
  @Input() public mode: any ;

  @Output() employeeOutput: EventEmitter<EmployeeDTO> = new EventEmitter();

 
 constructor(
  public modal: NgbActiveModal,
  private fb: FormBuilder,
)
 
  {
 }
 

  ngOnInit(): void {

    this.employeeForm = this.fb.group({
      id: [this.employee ? this.employee .id : null],
      firstName: [this.employee  ? this.employee.firstName : '', [Validators.required]],
      lastName: [this.employee  ? this.employee.lastName : '', [Validators.required]],
      email: [this.employee  ? this.employee.email : '', [Validators.required, Validators.email]]
    });
    console.log(this.mode)
    console.log(this.employee)
  }


  onSubmit(){
    this.modal.close(this.employeeForm.value);

  }

  
  
  


}
