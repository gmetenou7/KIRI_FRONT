import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ShNotFountComponent } from './sh-notfount/sh-notfount.component';
import { ShLanguageSwitcherComponent } from './sh-language-switcher/sh-language-switcher.component';
import {TranslateModule} from "@ngx-translate/core";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TieredMenuModule} from "primeng/tieredmenu";
import {ButtonModule} from "primeng/button";
import { ShPageWrapperComponent } from './sh-page-wrapper/sh-page-wrapper.component';
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [
    ShNotFountComponent,
    ShLanguageSwitcherComponent,
    ShPageWrapperComponent
  ],
    exports: [
        ShLanguageSwitcherComponent,
        ShPageWrapperComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    DropdownModule,
    FormsModule,
    NgOptimizedImage,
    TieredMenuModule,
    ButtonModule,
    StyleClassModule,
    RippleModule
  ]
})
export class SharedModule { }
