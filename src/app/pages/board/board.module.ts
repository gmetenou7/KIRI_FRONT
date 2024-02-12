import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BoCajComponent } from './bo-caj/bo-caj.component';
import {BoardRouting} from "./board.routing";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "../../shared/shared.module";
import { BoMainLayoutComponent } from './bo-main-layout/bo-main-layout.component';
import { BoAnnouncementComponent } from './bo-announcement/bo-announcement.component';
import {MenuModule} from "primeng/menu";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import { AnCreateComponent } from './bo-announcement/an-create/an-create.component';
import {FileUploadModule} from "primeng/fileupload";

@NgModule({
  declarations: [
    BoCajComponent,
    BoMainLayoutComponent,
    BoAnnouncementComponent,
    AnCreateComponent
  ],
  imports: [
    CommonModule,
    BoardRouting,
    ButtonModule,
    SharedModule,
    MenuModule,
    CheckboxModule,
    DialogModule,
    InputTextareaModule,
    InputTextModule,
    FileUploadModule
  ]
})

export class BoardModule {}
