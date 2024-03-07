import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CmMainLayoutComponent} from "./cm-main-layout/cm-main-layout.component";
import {CmMessagesListComponent} from "./cm-messages-list/cm-messages-list.component";


const routes: Routes = [
  {
    path: "",
    component: CmMainLayoutComponent,
    children: [
      {
        path: "",
        component: CmMessagesListComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CommunicationRouting{}
