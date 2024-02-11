import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BoMainLayoutComponent} from "./bo-main-layout/bo-main-layout.component";
import {BoCajComponent} from "./bo-caj/bo-caj.component";
import {BoAnnouncementComponent} from "./bo-announcement/bo-announcement.component";


const routes: Routes = [
  {
    path: "",
    component: BoMainLayoutComponent,
    children: [
      {
        path: "",
        component: BoCajComponent
      },
      {
        path: "announcements",
        component: BoAnnouncementComponent
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

export  class BoardRouting {}
