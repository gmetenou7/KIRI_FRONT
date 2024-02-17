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
import { AnUpdateComponent } from './bo-announcement/an-update/an-update.component';
import { AnDetailComponent } from './bo-announcement/an-detail/an-detail.component';
import {ChipsModule} from "primeng/chips";
import {AvatarModule} from "primeng/avatar";
import {InputSwitchModule} from "primeng/inputswitch";
import {StyleClassModule} from "primeng/styleclass";
import {SidebarModule} from "primeng/sidebar";
import { BoAnnualGrowthComponent } from './bo-annual-growth/bo-annual-growth.component';
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {ChartModule} from "primeng/chart";
import { BoPpvComponent } from './bo-ppv/bo-ppv.component';
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {SliderModule} from "primeng/slider";
import {BadgeModule} from "primeng/badge";
import { BoBestClientsComponent } from './bo-best-clients/bo-best-clients.component';
import { BcSendMessageComponent } from './bo-best-clients/bc-send-message/bc-send-message.component';
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    BoCajComponent,
    BoMainLayoutComponent,
    BoAnnouncementComponent,
    AnCreateComponent,
    AnUpdateComponent,
    AnDetailComponent,
    BoAnnualGrowthComponent,
    BoPpvComponent,
    BoBestClientsComponent,
    BcSendMessageComponent
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
    FileUploadModule,
    ChipsModule,
    AvatarModule,
    InputSwitchModule,
    StyleClassModule,
    SidebarModule,
    MultiSelectModule,
    DropdownModule,
    ChartModule,
    TableModule,
    FormsModule,
    SliderModule,
    BadgeModule,
    RippleModule
  ]
})

export class BoardModule {}
