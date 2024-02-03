import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaDashboardComponent } from './pa-dashboard/pa-dashboard.component';
import {PageRoutingModule} from "./page.routing";
import { PaArticlesComponent } from './pa-articles/pa-articles.component';



@NgModule({
  declarations: [
    PaDashboardComponent,
    PaArticlesComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
