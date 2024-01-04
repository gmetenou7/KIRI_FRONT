import {
  Component, OnInit
} from '@angular/core';
import {
  FormArray, FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  FormlyFormOptions,
  FormlyFieldConfig
} from '@ngx-formly/core';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}
@Component({
  selector: 'app-au-register',
  templateUrl: './au-register.component.html',
  styleUrls: ['./au-register.component.css']
})
export class AuRegisterComponent implements  OnInit{
  activatedStep = 1;
  registerForm: FormGroup = new FormGroup({});
  model : any = {};

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      phone: [""],
    });
  }

  prevStep(step:number) {
    this.activatedStep = step;
  }

  nextStep(step:number) {
    this.activatedStep = step;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

}
