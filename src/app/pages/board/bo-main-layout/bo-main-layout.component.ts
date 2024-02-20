import { Component, OnInit } from '@angular/core';
import { PageSidebarLinkModele } from "../../../core/models/page-sidebar-link.modele";
import { DashboardPageSideItems } from "../../../core/data/page-side-items.data";

@Component({
  selector: 'app-bo-main-layout',
  templateUrl: './bo-main-layout.component.html',
  styleUrls: ['./bo-main-layout.component.css']
})
export class BoMainLayoutComponent implements OnInit {
  leftSidebarItems: PageSidebarLinkModele[] = []

  ngOnInit() {
    this.leftSidebarItems = DashboardPageSideItems
  }
}
