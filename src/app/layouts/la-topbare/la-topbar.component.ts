import { Component, OnInit } from '@angular/core';
import { FormatDateService } from '../../shared/utilities/formate-date.service';
import {TopbarNavItems} from "../../core/data/topbar-navitems.data";
import {TopBarNavigationModele} from "../../core/models/top-bar-navigation-modele";

@Component({
  selector: 'app-la-topbar',
  templateUrl: './la-topbar.component.html',
  styleUrls: ['./la-topbar.component.css'],
})
export class LaTopbarComponent implements OnInit {
  today: string = '';
  constructor(private formateDateService: FormatDateService) {}
  navigation_items: TopBarNavigationModele[] = [];
  ngOnInit() {
    this.navigation_items = TopbarNavItems;
    this.today = this.formateDateService.format(new Date().toDateString());
  }
}
