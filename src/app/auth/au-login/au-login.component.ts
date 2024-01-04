import { Component, OnInit } from '@angular/core';
import { Carousel } from "../models/models.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-au-login',
  templateUrl: './au-login.component.html',
  styleUrls: ['./au-login.component.css']
})
export class AuLoginComponent implements OnInit {
  value: string = '';
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get loginFromControls() {
    return this.loginForm.controls;
  }


  onSubmit() {
    const { email, password } = this.loginForm.value;
    const requestData = {
      email,
      password
    }
    console.log({ requestData });
  }
}
