import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-au-reset-password',
  templateUrl: './au-reset-password.component.html',
  styleUrls: ['./au-reset-password.component.css']
})
export class AuResetPasswordComponent implements  OnInit {

  activeStep = 1;
  resetPasswordForm: FormGroup = new FormGroup({});
  selectedChanel: string = '';
  phoneEmail: string = '';
  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      phoneEmail: ['', [Validators.required]],
    });
  }

  setStep(step: number) {
    this.activeStep = step;
  }

  onSubmit() {
    console.log('onSubmit');
  }

  onOtpChange(otp: string) {
    console.log(otp);
  }
}
