import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-au-register-agency',
  templateUrl: './au-register-agency.component.html',
  styleUrls: ['./au-register-agency.component.css']
})
export class AuRegisterAgencyComponent implements OnInit{

  activeStep:number = 1
  phoneList:Array<string> = []
  emailList:Array<string> = []

  agencyNameForm:FormGroup = new FormGroup({});
  companyAddressForm: FormGroup = new FormGroup({});
  companyAddPhoneForm: FormGroup = new FormGroup({});
  companyAddEmailForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder:FormBuilder
  ) {
  }
  ngOnInit() {
    this.agencyNameForm = this.formBuilder.group({
      agencyName: ['', [Validators.required]],
    });

    this.companyAddressForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      town: ['', [Validators.required]],
      zipCode: [''],
      streetNumber: [''],
      streetName: ['', [Validators.required]],
    });

    this.companyAddPhoneForm = this.formBuilder.group({
      phone: ['', [Validators.required]],
    });

    this.companyAddEmailForm = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

  setStep(step:number) {
    this.activeStep = step
  }

  addPhone() {
    this.phoneList.push(this.companyAddPhoneForm.value.phone);
    this.companyAddPhoneForm.reset();
  }

  addEmail() {
    this.emailList.push(this.companyAddEmailForm.value.email);
    this.companyAddEmailForm.reset();
  }
}
