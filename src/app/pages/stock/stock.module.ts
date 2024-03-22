import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRouting } from "./stock.routing";
import { StMainLayoutComponent } from './st-main-layout/st-main-layout.component';
import { SharedModule } from "../../shared/shared.module";
import { StListFamiliesComponent } from './st-family/st-list-families/st-list-families.component';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import { PaginatorModule } from "primeng/paginator";
import { StFamilyViewComponent } from './st-family/st-family-view/st-family-view.component';
import { SidebarModule } from "primeng/sidebar";
import { CoreModule } from "../../core/core.module";
import { SelectButtonModule } from "primeng/selectbutton";
import { StSubFamilyComponent } from './st-sub-family/st-sub-family.component';
import { LoListComponent } from './st-sub-family/sf-level-one/lo-list/lo-list.component';
import { LoViewComponent } from './st-sub-family/sf-level-one/lo-view/lo-view.component';
import { LtListComponent } from './st-sub-family/sf-level-two/lt-list/lt-list.component';
import { LtViewComponent } from './st-sub-family/sf-level-two/lt-view/lt-view.component';
import { StListTagsComponent } from './tags/st-list-tags/st-list-tags.component';
import { StTagViewComponent } from './tags/st-tag-view/st-tag-view.component';
import { StProviderViewComponent } from './st-providers/st-provider-view/st-provider-view.component';
import { StListProvidersComponent } from './st-providers/st-list-providers/st-list-providers.component';
import { ChipsModule } from 'primeng/chips';
import { OverlayPanelModule } from 'primeng/overlaypanel';



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
    StListTagsComponent,
    StTagViewComponent,
    StProviderViewComponent,
    StListProvidersComponent,
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
    SelectButtonModule,
    ChipsModule,
    OverlayPanelModule
  ]
})
export class StockModule { }
