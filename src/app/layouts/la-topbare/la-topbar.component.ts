import {Component, OnInit} from '@angular/core';
import {FormatDateService} from "../../shared/utilities/formate-date.service";

const NAV_ITEMS: {label:string, link:string}[] = [
  {
    label: "Bord",
    link: "/app"
  },
  {
    label: "Articles",
    link: "articles"
  },
  {
    label: "Com",
    link: "communications"
  },
  {
    label: "Stock",
    link: "stock"
  },
  {
    label: "Ventes",
    link: "sales"
  },
  {
    label: "Compta",
    link: "accounting"
  },
  {
    label: "SAV",
    link: "sav"
  },
  {
    label: "Clients",
    link: "clients"
  },
  {
    label: "Configs",
    link: "configs"
  },
  {
    label: "E-Com",
    link: "e-commerce"
  }
]
@Component({
  selector: 'app-la-topbar',
  templateUrl: './la-topbar.component.html',
  styleUrls: ['./la-topbar.component.css']
})
export class LaTopbarComponent implements  OnInit{

  today:string=""
  constructor(
    private formateDateService: FormatDateService
  ) {
  }
  navigation_items: {label:string, link:string}[]=[]
  ngOnInit() {
    this.navigation_items = NAV_ITEMS;
    this.today = this.formateDateService.format(new Date().toDateString());
  }
}
