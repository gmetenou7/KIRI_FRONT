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
import { ArExportComponent } from './ar-export/ar-export.component';
import {SidebarModule} from "primeng/sidebar";
import {MultiSelectModule} from "primeng/multiselect";
import {FileUploadModule} from "primeng/fileupload";
import { ArArticleDetailComponent } from './ar-article-detail/ar-article-detail.component';
import {RippleModule} from "primeng/ripple";
import { ArProformatComponent } from './ar-proformat/ar-proformat.component';
import {CheckboxModule} from "primeng/checkbox";
import { PrPreviewComponent } from './ar-proformat/pr-previw/pr-preview.component';
import {StyleClassModule} from "primeng/styleclass";
import { ArDeliveryNoteComponent } from './ar-delivery-note/ar-delivery-note.component';
import { DeNotePreviewComponent } from './ar-delivery-note/de-note-preview/de-note-preview.component';
import { ArOutValidationComponent } from './ar-out-validation/ar-out-validation.component';
import { OuValidationPreviewComponent } from './ar-out-validation/ou-validation-preview/ou-validation-preview.component';

@NgModule({
    declarations: [
    ArListArticlesComponent,
    ArMainLayoutComponent,
    ArExportComponent,
    ArArticleDetailComponent,
    ArProformatComponent,
    PrPreviewComponent,
    ArDeliveryNoteComponent,
    DeNotePreviewComponent,
    ArOutValidationComponent,
    OuValidationPreviewComponent
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
    FormsModule,
    SidebarModule,
    MultiSelectModule,
    FileUploadModule,
    RippleModule,
    CheckboxModule,
    StyleClassModule
  ]
})

export class ArticlesModule {}
