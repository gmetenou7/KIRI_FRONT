import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PageSidebarLinkModel } from "../../core/models/page-sidebar-link.model";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-sh-page-wrapper',
  templateUrl: './sh-page-wrapper.component.html',
  styleUrls: ['./sh-page-wrapper.component.css']
})
export class ShPageWrapperComponent implements OnInit, OnDestroy {
  toggled: boolean = true;
  @Input("navItems") sideBarLinks?: PageSidebarLinkModel[] = [];
  @Input("showLeftNav") showLeftNav: boolean = false;
  currentUrl: string = "";
  currentAction?:string
  routeSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}
  onToggle() {
    this.toggled = !this.toggled;
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.currentAction = this.router.url.split("action=")[1];
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
        this.currentAction = event.url.split("action=")[1];
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.router.navigate([this.currentUrl], {queryParams: {}}).then(r => {})
  }

  generateLink(link: PageSidebarLinkModel): void | string {
    if (link.action) {
      this.router.navigate([], {
        queryParams: {
          action: link.action,
        },
        queryParamsHandling: 'merge' // Merge with existing query params
      }).then(r => {});
    } else {
      return `/communication/${link.link}`;
    }
  }

}
