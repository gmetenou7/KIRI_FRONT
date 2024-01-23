import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LaMainLayoutComponent} from "../layouts/la-main-layout/la-main-layout.component";
import {PaDashboardComponent} from "./pa-dashboard/pa-dashboard.component";
import {PaArticlesComponent} from "./pa-articles/pa-articles.component";

const routes : Routes= [
  {
    path: '',
    component: LaMainLayoutComponent,
    children: [
      {
        path: '',
        component: PaDashboardComponent
      },
      {
        path: 'articles',
        component: PaArticlesComponent
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

export  class PageRoutingModule {
}
