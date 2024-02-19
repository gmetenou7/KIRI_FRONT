import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductModele } from '../../../core/models/product.modele';
import { ClientModele } from '../../../core/models/client.modele';
import { ClientService } from '../../../core/services/client.service';
import { ProductService } from '../../../core/services/product.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-bo-products-per-client',
  templateUrl: './bo-products-per-client.component.html',
  styleUrls: ['./bo-products-per-client.component.css'],
})
export class BoProductsPerClientComponent implements OnInit {
  years: Array<number> = [];
  agencies: Array<{ name: string; id: number; ca: number }> = [];
  products: ProductModele[] = [];
  clients: ClientModele[] = [];
  loading: boolean = false;
  showSendMessageDrawer: boolean = false;

  selectedYear: number = 2024;
  selectedAgency: { name: string; id: number; ca: number } = {
    id: 1,
    name: 'Agence de Yaoundé',
    ca: 100000000,
  };
  selectClient!: ClientModele | undefined;
  selectedClients: ClientModele[] = [];

  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private clientService: ClientService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.years = this.getYearsUntil(2000);
    this.clientService.getAllClient().then((data) => {
      this.loading = false;
      this.clients = data;
    });
    this.productService.getAllProduct().then((products) => {
      this.loading = false;
      this.products = products;
    });
    this.agencies = [
      {
        id: 1,
        name: 'Agence de Yaoundé',
        ca: 100000000,
      },
      {
        id: 2,
        name: 'Agence de Douala',
        ca: 200000000,
      },
      {
        id: 3,
        name: 'Agence de Dshang',
        ca: 300000000,
      },
    ];
  }

  getYearsUntil(year: number) {
    let currentYear = new Date().getFullYear();
    let yearsArray = [];
    for (let i = currentYear; i >= year; i--) {
      yearsArray.push(i);
    }
    return yearsArray;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  onSendMessageDrawer() {
    this.showSendMessageDrawer = !this.showSendMessageDrawer;
  }
}
