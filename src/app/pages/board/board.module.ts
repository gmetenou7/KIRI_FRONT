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
import { BoDebtsComponent } from './bo-debts/bo-debts.component';
import { DeSendMessageComponent } from './bo-debts/de-send-message/de-send-message.component';
import { BoCaSourcesComponent } from './bo-ca-souces/bo-ca-sources.component';
import { CasDetailComponent } from './bo-ca-souces/cas-detail/cas-detail.component';
import {CalendarModule} from "primeng/calendar";
import {ChipModule} from "primeng/chip";
import { BoProductsPerClientComponent } from './bo-products-per-client/bo-products-per-client.component';
import { PrcSendMessageComponent } from './bo-products-per-client/prc-send-message/prc-send-message.component';
import { BoCashSituationComponent } from './bo-cash-situation/bo-cash-situation.component';
import { CloseCashSituationComponent } from './bo-cash-situation/close-cash-situation/close-cash-situation.component';
import { DateEventsComponent } from './bo-cash-situation/date-events/date-events.component';
import { PrinteComponent } from './bo-cash-situation/printe/printe.component';

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
    BcSendMessageComponent,
    BoDebtsComponent,
    DeSendMessageComponent,
    BoCaSourcesComponent,
    CasDetailComponent,
    BoProductsPerClientComponent,
    PrcSendMessageComponent,
    BoCashSituationComponent,
    CloseCashSituationComponent,
    DateEventsComponent,
    PrinteComponent
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
    RippleModule,
    CalendarModule,
    ChipModule
  ]
})

export class BoardModule {}
