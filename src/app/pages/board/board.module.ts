import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BoCajComponent } from './bo-caj/bo-caj.component';
import {BoardRouting} from "./board.routing";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "../../shared/shared.module";
import { BoMainLayoutComponent } from './bo-main-layout/bo-main-layout.component';
import { BoAnnouncementComponent } from './bo-announcement/bo-announcement.component';

@NgModule({
  declarations: [
    BoCajComponent,
    BoMainLayoutComponent,
    BoAnnouncementComponent
  ],
  imports: [
    CommonModule,
    BoardRouting,
    ButtonModule,
    SharedModule
  ]
})

export class BoardModule {}
