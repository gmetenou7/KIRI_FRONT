import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
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
import { CmNewMessageComponent } from './cm-new-message/cm-new-message.component';
import { CmPreSavedMessageComponent } from './cm-pre-saved-message/cm-pre-saved-message.component';
import { CmClientsPerMessageComponent } from './cm-clients-per-message/cm-clients-per-message.component';
import { CmMessageDetailComponent } from './cm-message-detail/cm-message-detail.component';
import {SidebarModule} from "primeng/sidebar";
import {BadgeModule} from "primeng/badge";
import {TagModule} from "primeng/tag";
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";
import {EditorModule} from "primeng/editor";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";

@NgModule({
  declarations: [
      CmMainLayoutComponent,
      CmMessagesListComponent,
      CmNewMessageComponent,
      CmPreSavedMessageComponent,
      CmClientsPerMessageComponent,
      CmMessageDetailComponent
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
    AvatarModule,
    SidebarModule,
    BadgeModule,
    TagModule,
    NgOptimizedImage,
    StyleClassModule,
    RippleModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    DialogModule,
    FormsModule,
    MultiSelectModule,
    EditorModule,
    InputTextareaModule,
    FileUploadModule
  ]
})

export class CommunicationModule {}
