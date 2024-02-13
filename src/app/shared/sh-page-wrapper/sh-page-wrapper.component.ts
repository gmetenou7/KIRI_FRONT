import {Component, Input, OnInit} from '@angular/core';
import {PageSidebarLinkModele} from "../../core/models/page-sidebar-link.modele";
import {ActivatedRoute, Router, UrlSegment} from "@angular/router";

@Component({
  selector: 'app-sh-page-wrapper',
  templateUrl: './sh-page-wrapper.component.html',
  styleUrls: ['./sh-page-wrapper.component.css']
})
export class ShPageWrapperComponent implements OnInit{
  toggled: boolean = true;
  @Input("navItems") sideBarLinks?: PageSidebarLinkModele[] = [];
  showLeftNav: boolean = false
  currentUrl: string = ""
  constructor(
    private route: Router
  ) {
  }
  onToggle() {
      this.toggled = !this.toggled;
  }

  ngOnInit() {
    this.showLeftNav = !!this.sideBarLinks;
    this.currentUrl = this.route.url
  }
}
