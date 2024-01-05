import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-au-register-company',
  templateUrl: './au-register-company.component.html',
  styleUrls: ['./au-register-company.component.css']
})
export class AuRegisterCompanyComponent implements  OnInit {

    phoneList: string[] = [];
    emailList: string[] = [];

    activeStep = 1;
    companyNameForm: FormGroup = new FormGroup({});
    companyAddressForm: FormGroup = new FormGroup({});
    companyLegislationForm: FormGroup = new FormGroup({});
    companyActivityForm: FormGroup = new FormGroup({});
    companyAddPhoneForm: FormGroup = new FormGroup({});
    companyAddEmailForm: FormGroup = new FormGroup({});
    activitiesSector: string[] = [
      'Agriculture, sylviculture et pêche',
      'Industrie manufacturière',
      'Construction',
      'Transports et entreposage',
      'Hébergement et restauration',
      'Information et communication',
      'Activités financières et d\'assurance',
      'Activités immobilières',
      'Activités spécialisées, scientifiques et techniques',
      'Activités de services administratifs et de soutien',
      'Administration publique',
      'Enseignement',
      'Santé humaine et action sociale',
      'Arts, spectacles et activités récréatives',
      'Autres activités de services',
    ];
    constructor(
      private formBuilder: FormBuilder,
    ) {

    }

    ngOnInit(): void {
      this.companyNameForm = this.formBuilder.group({
        companyName: ['', [Validators.required]],
      });

      this.companyAddressForm = this.formBuilder.group({
        country: ['', [Validators.required]],
        town: ['', [Validators.required]],
        zipCode: [''],
        streetNumber: [''],
        streetName: ['', [Validators.required]],
      });

      this.companyLegislationForm = this.formBuilder.group({
        legalForm: ['', [Validators.required]],
        nif: ['', [Validators.required]],
      });

      this.companyActivityForm = this.formBuilder.group({
        activitiesSectors: ['', [Validators.required]],
      });

      this.companyAddPhoneForm = this.formBuilder.group({
        phone: ['', [Validators.required]],
      });

      this.companyAddEmailForm = this.formBuilder.group({
        email: ['', [Validators.required]],
      });
    }

    setStep(step: number) {
      this.activeStep = step;
    }

    onSubmit() {
      console.log('onSubmit');
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
