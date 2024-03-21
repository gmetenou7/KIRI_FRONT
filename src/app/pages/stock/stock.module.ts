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
import {SelectButtonModule} from "primeng/selectbutton";
import { StSubFamilyComponent } from './st-sub-family/st-sub-family.component';
import { LoListComponent } from './st-sub-family/sf-level-one/lo-list/lo-list.component';
import { LoViewComponent } from './st-sub-family/sf-level-one/lo-view/lo-view.component';
import { LtListComponent } from './st-sub-family/sf-level-two/lt-list/lt-list.component';
import { LtViewComponent } from './st-sub-family/sf-level-two/lt-view/lt-view.component';



@NgModule({
  declarations: [
    StMainLayoutComponent,
    StListFamiliesComponent,
    StFamilyViewComponent,
    StSubFamilyComponent,
    LoListComponent,
    LoViewComponent,
    LtListComponent,
    LtViewComponent,
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
    CoreModule,
    SelectButtonModule
  ]
})
export class StockModule { }
