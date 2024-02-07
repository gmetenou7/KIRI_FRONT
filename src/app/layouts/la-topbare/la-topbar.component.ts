import { Component, OnInit } from '@angular/core';
import { FormatDateService } from '../../shared/utilities/formate-date.service';

const NAV_ITEMS: { label: string; link: string; icon: string }[] = [
  {
    label: 'Bord',
    link: '/app',
    icon: '',
  },
  {
    label: 'Articles',
    link: 'articles',
    icon: '',
  },
  {
    label: 'Com',
    link: 'communications',
    icon: '',
  },
  {
    label: 'Stock',
    link: 'stock',
    icon: '',
  },
  {
    label: 'Ventes',
    link: 'sales',
    icon: '',
  },
  {
    label: 'Compta',
    link: 'accounting',
    icon: '',
  },
  {
    label: 'SAV',
    link: 'sav',
    icon: '',
  },
  {
    label: 'Clients',
    link: 'clients',
    icon: '',
  },
  {
    label: 'Configs',
    link: 'configs',
    icon: '',
  },
  {
    label: 'E-Com',
    link: 'e-commerce',
    icon: '',
  },
];
@Component({
  selector: 'app-la-topbar',
  templateUrl: './la-topbar.component.html',
  styleUrls: ['./la-topbar.component.css'],
})
export class LaTopbarComponent implements OnInit {
  today: string = '';
  constructor(private formateDateService: FormatDateService) {}
  navigation_items: { label: string; link: string }[] = [];
  ngOnInit() {
    this.navigation_items = NAV_ITEMS;
    this.today = this.formateDateService.format(new Date().toDateString());
  }
}
