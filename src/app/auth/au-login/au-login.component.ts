import { Component, OnInit } from '@angular/core';
import { Carousel } from "../models/models.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Router} from "@angular/router";

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
    private router : Router,
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
    this.router.navigate(['/register-company']).then(r => console.log(r));
  }
}
