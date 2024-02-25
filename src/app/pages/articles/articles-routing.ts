import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArListArticlesComponent} from "./ar-list-articles/ar-list-articles.component";
import {ArMainLayoutComponent} from "./ar-main-layout/ar-main-layout.component";


const routes: Routes = [
  {
    path: "",
    component: ArMainLayoutComponent,
    children: [
      {
        path: "",
        component: ArListArticlesComponent
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

export class ArticlesRouting {}
