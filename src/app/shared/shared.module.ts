import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ShNotFountComponent } from './sh-notfount/sh-notfount.component';
import { ShLanguageSwitcherComponent } from './sh-language-switcher/sh-language-switcher.component';
import {TranslateModule} from "@ngx-translate/core";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TieredMenuModule} from "primeng/tieredmenu";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    ShNotFountComponent,
    ShLanguageSwitcherComponent
  ],
  exports: [
    ShLanguageSwitcherComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    DropdownModule,
    FormsModule,
    NgOptimizedImage,
    TieredMenuModule,
    ButtonModule
  ]
})
export class SharedModule { }
