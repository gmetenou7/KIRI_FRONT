import {Component, OnInit} from '@angular/core';
import {PageSidebarLinkModel} from "../../../core/models/page-sidebar-link.model";
import {stockSidebarLinks} from "../../../core/data/page-side-items.data";

@Component({
  selector: 'app-st-main-layout',
  templateUrl: './st-main-layout.component.html',
  styleUrls: ['./st-main-layout.component.css']
})
export class StMainLayoutComponent implements OnInit{

  leftSidebarItems: PageSidebarLinkModel[] = [];

  ngOnInit() {
    this.leftSidebarItems = stockSidebarLinks
  }

}
