import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LaMainLayoutComponent} from "../layouts/la-main-layout/la-main-layout.component";

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
      },
      {
        path: 'communication',
        loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule)
      },
      {
        path: 'stock',
        loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)
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
