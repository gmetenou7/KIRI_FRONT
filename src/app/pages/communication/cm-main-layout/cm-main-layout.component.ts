import {Component, OnInit} from '@angular/core';
import {PageSidebarLinkModel} from "../../../core/models/page-sidebar-link.model";
import {CommunicationSideBarLinks} from "../../../core/data/page-side-items.data";

@Component({
  selector: 'app-cm-main-layout',
  templateUrl: './cm-main-layout.component.html',
  styleUrls: ['./cm-main-layout.component.css']
})
export class CmMainLayoutComponent implements OnInit {

  leftSidebarItems: PageSidebarLinkModel[] = []

  ngOnInit() {
    this.leftSidebarItems = CommunicationSideBarLinks
  }
}
