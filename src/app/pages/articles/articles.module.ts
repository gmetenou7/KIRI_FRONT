import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArticlesRouting} from "./articles-routing";
import { ArListArticlesComponent } from './ar-list-articles/ar-list-articles.component';
import { ArMainLayoutComponent } from './ar-main-layout/ar-main-layout.component';
import {SharedModule as KiriSharedModule} from "../../shared/shared.module";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
    ArListArticlesComponent,
    ArMainLayoutComponent
  ],
  imports: [
    CommonModule,
    ArticlesRouting,
    KiriSharedModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    TableModule,
    DropdownModule,
    FormsModule
  ]
})

export class ArticlesModule {}
