import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StMainLayoutComponent} from "./st-main-layout/st-main-layout.component";
import {StListFamiliesComponent} from "./st-family/st-list-families/st-list-families.component";


const routes: Routes = [
  {
    path: "",
    component: StMainLayoutComponent,
    children: [
      {
        path: "",
        component: StListFamiliesComponent
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

export class StockRouting {}
