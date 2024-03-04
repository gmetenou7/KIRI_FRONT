import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CommunicationRouting} from "./communication-routing";
import { CmMainLayoutComponent } from './cm-main-layout/cm-main-layout.component';
import { CmMessagesListComponent } from './cm-messages-list/cm-messages-list.component';
import {SharedModule as KiriSharedModule} from "../../shared/shared.module";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {CoreModule} from "../../core/core.module";
import {AvatarGroupModule} from "primeng/avatargroup";
import {AvatarModule} from "primeng/avatar";

@NgModule({
  declarations: [
      CmMainLayoutComponent,
      CmMessagesListComponent
  ],
  imports: [
    CommonModule,
    CommunicationRouting,
    KiriSharedModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    SharedModule,
    TableModule,
    CoreModule,
    AvatarGroupModule,
    AvatarModule
  ]
})

export class CommunicationModule {}
