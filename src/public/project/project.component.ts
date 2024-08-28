import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectDTO } from '../../model/projectDTO';
import { NgbActiveModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { create } from 'domain';

@Component({
  selector: 'app-progect',
  standalone: true,
  imports: [ReactiveFormsModule,  NgbModule ,NgbModalModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {

  @Input() project:ProjectDTO | undefined;
  @Input() public mode: any ;
  @Output() projectOutput: EventEmitter<ProjectDTO> = new EventEmitter(); 

  projectForm!: FormGroup;

  constructor(  public modal: NgbActiveModal,
    private fb: FormBuilder,  ) 
  {

  }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      id: [this.project ? this.project .id : null],
      name: [this.project  ? this.project.name : '', [Validators.required]],
      description: [this.project  ? this.project.description : '', [Validators.required]],
    
    });
    console.log(this.project)
  }


  onSubmit(){
    if(this.mode=== 'CREATE'){
      this.modal.close(this.projectForm.value);
    }else if(this.mode==='UPDATE'){
      this.project=this.projectForm.value;
      this.modal.close();
    }
  
}


  cancel(){
    this.modal.close();
  }
}
