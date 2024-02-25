import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LaMainLayoutComponent} from "../layouts/la-main-layout/la-main-layout.component";
import {PaDashboardComponent} from "./pa-dashboard/pa-dashboard.component";

const routes : Routes= [
  {
    path: '',
    component: LaMainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./board/board.module').then(m => m.BoardModule),
      },
      {
        path: 'articles',
        loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
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
