import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { AuthRouting } from './auth-routing';
import { AuRegisterComponent } from './au-register/au-register.component';
import { AuLoginComponent } from './au-login/au-login.component';
import {CheckboxModule} from "primeng/checkbox";
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {StyleClassModule} from "primeng/styleclass";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import { AuAuthLayoutComponent } from './au-auth-layout/au-auth-layout.component';
import {FormlyModule} from "@ngx-formly/core";
import {FormlyPrimeNGModule} from "@ngx-formly/primeng";
import {ImageModule} from "primeng/image";
import {SharedModule} from "../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    AuRegisterComponent,
    AuLoginComponent,
    AuAuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRouting,
    CheckboxModule,
    PasswordModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    StyleClassModule,
    CarouselModule,
    TagModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'Ce champ est requis'},
      ],
    }),
    ImageModule,
    SharedModule,
    TranslateModule,
  ]
})
export class AuthModule { }
