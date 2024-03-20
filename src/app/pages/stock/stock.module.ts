import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockRouting} from "./stock.routing";
import { StMainLayoutComponent } from './st-main-layout/st-main-layout.component';
import {SharedModule} from "../../shared/shared.module";
import { StListFamiliesComponent } from './st-family/st-list-families/st-list-families.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import { StFamilyViewComponent } from './st-family/st-family-view/st-family-view.component';
import {SidebarModule} from "primeng/sidebar";
import {CoreModule} from "../../core/core.module";



@NgModule({
  declarations: [
    StMainLayoutComponent,
    StListFamiliesComponent,
    StFamilyViewComponent
  ],
  imports: [
    CommonModule,
    StockRouting,
    SharedModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    PaginatorModule,
    SidebarModule,
    CoreModule
  ]
})
export class StockModule { }
