import { Component, OnInit } from '@angular/core';
import { PageSidebarLinkModel } from "../../../core/models/page-sidebar-link.model";
import { DashboardPageSideItems } from "../../../core/data/page-side-items.data";

@Component({
  selector: 'app-bo-main-layout',
  templateUrl: './bo-main-layout.component.html',
  styleUrls: ['./bo-main-layout.component.css']
})
export class BoMainLayoutComponent implements OnInit {
  leftSidebarItems: PageSidebarLinkModel[] = []

  ngOnInit() {
    this.leftSidebarItems = DashboardPageSideItems
  }
}
