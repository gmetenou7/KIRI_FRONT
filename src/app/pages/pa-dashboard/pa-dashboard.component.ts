import {Component, OnInit} from '@angular/core';
import {PageSidebarLinkModel} from "../../core/models/page-sidebar-link.model";
import {DashboardPageSideItems} from "../../core/data/page-side-items.data";

@Component({
  selector: 'app-pa-dashboard',
  templateUrl: './pa-dashboard.component.html',
  styleUrls: ['./pa-dashboard.component.css']
})
export class PaDashboardComponent implements OnInit{

  leftSidebarItems: PageSidebarLinkModel[] = []

  ngOnInit() {
    this.leftSidebarItems = DashboardPageSideItems
  }
}
