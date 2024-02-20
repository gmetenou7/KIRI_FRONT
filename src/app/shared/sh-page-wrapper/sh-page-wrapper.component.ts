import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PageSidebarLinkModele } from "../../core/models/page-sidebar-link.modele";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-sh-page-wrapper',
  templateUrl: './sh-page-wrapper.component.html',
  styleUrls: ['./sh-page-wrapper.component.css']
})
export class ShPageWrapperComponent implements OnInit, OnDestroy {
  toggled: boolean = true;
  @Input("navItems") sideBarLinks?: PageSidebarLinkModele[] = [];
  showLeftNav: boolean = false;
  currentUrl: string = "";
  routeSubscription!: Subscription;

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
    this.routeSubscription = this.route.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url
      }
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
