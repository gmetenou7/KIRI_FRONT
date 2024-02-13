import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaDashboardComponent } from './pa-dashboard/pa-dashboard.component';
import {PageRoutingModule} from "./page.routing";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "../shared/shared.module";
import {BoardModule} from "./board/board.module";
import {BoardRouting} from "./board/board.routing";



@NgModule({
  declarations: [
    PaDashboardComponent,
  ],
    imports: [
        CommonModule,
        PageRoutingModule,
        BoardModule,
        BoardRouting,
        ButtonModule,
        SharedModule
    ]
})
export class PageModule { }
