import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormatDateService } from '../../shared/utilities/formate-date.service';
import {TopbarNavItems} from "../../core/data/topbar-navitems.data";
import {TopBarNavigationModele} from "../../core/models/top-bar-navigation-modele";
import {  NavigationStart, Router } from "@angular/router";
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-la-topbar',
  templateUrl: './la-topbar.component.html',
  styleUrls: ['./la-topbar.component.css'],
})
export class LaTopbarComponent implements OnInit, OnDestroy {
  today: string = '';
  navigation_items: TopBarNavigationModele[] = [];
  currentUrl: string = "";
  routeSubscription!: Subscription;

  constructor(
    private formateDateService: FormatDateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.navigation_items = TopbarNavItems;
    this.today = this.formateDateService.format(new Date().toDateString());

    this.currentUrl = this.router.url;
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
