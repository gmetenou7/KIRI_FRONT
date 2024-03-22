import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { StMainLayoutComponent } from "./st-main-layout/st-main-layout.component";
import { StListFamiliesComponent } from "./st-family/st-list-families/st-list-families.component";
import { StSubFamilyComponent } from "./st-sub-family/st-sub-family.component";
import { StListTagsComponent } from "./tags/st-list-tags/st-list-tags.component";
import { StListProvidersComponent } from "./st-providers/st-list-providers/st-list-providers.component";


const routes: Routes = [
  {
    path: "",
    component: StMainLayoutComponent,
    children: [
      {
        path: "",
        component: StListFamiliesComponent
      },
      {
        path: "sub-family",
        component: StSubFamilyComponent
      },
      {
        path: "tags",
        component: StListTagsComponent
      },
      {
        path: "providers",
        component: StListProvidersComponent
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

export class StockRouting { }
