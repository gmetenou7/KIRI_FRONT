import {Component, OnInit,} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-au-register-services',
  templateUrl: './au-register-services.component.html',
  styleUrls: ['./au-register-services.component.css']
})
export class AuRegisterServicesComponent implements OnInit{
  serviceAddPhoneForm:FormGroup = new FormGroup({})
  phoneList:Array<string> = []
  constructor(
    private formBuilder:FormBuilder
  ) {
  }
  ngOnInit() {
    this.serviceAddPhoneForm = this.formBuilder.group({
      serviceName: ["", [Validators.required]]
    })
  }

  addService() {
    this.phoneList.push(this.serviceAddPhoneForm.value.name);
    this.serviceAddPhoneForm.reset();
  }
}
