import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductModele} from "../../../core/models/product.modele";
import {ClientModele} from "../../../core/models/client.modele";
import {ClientService} from "../../../core/services/client.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-bo-best-clients',
  templateUrl: './bo-best-clients.component.html',
  styleUrls: ['./bo-best-clients.component.css']
})
export class BoBestClientsComponent implements OnInit {

  years: Array<number> = [];
  agencies:Array<{name: string, id:number, ca: number}> = [];
  clients:Array<{name: string, id:number, ca: number}> = [];
  clientsList: ClientModele[] = [];
  selectedClients: ClientModele[] = [];
  selectedYear: number = 2024;
  selectedAgency: {name:string, id: number, ca:number} = {
    id: 1,
    name: "Agence de Yaoundé",
    ca: 100000000
  };
  selectClient = {
    id: 3,
    name: "Maria johnson",
    ca: 300000000
  }

  products: ProductModele[] = [];
  loading: boolean = true;
  showSendMessageDrawer: boolean = false;

  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private clientsService: ClientService
  ) {
  }
  ngOnInit() {
    this.years = this.getYearsUntil(2000);
    this.clientsService.getAllClient().then((data) => {
      this.loading = false;
      this.clientsList = data
    })
    this.agencies = [
      {
        id: 1,
        name: "Agence de Yaoundé",
        ca: 100000000
      },
      {
        id: 2,
        name: "Agence de Douala",
        ca: 200000000
      },
      {
        id: 3,
        name: "Agence de Dshang",
        ca: 300000000
      }
    ];
    this.clients = [
      {
        id: 1,
        name: "Nelson mandela",
        ca: 100000000
      },
      {
        id: 2,
        name: "Josepha does",
        ca: 200000000
      },
      {
        id: 3,
        name: "Maria johnson",
        ca: 300000000
      }
    ];
  }

  getYearsUntil(year:number) {
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
      this.loading = false
    }, 2000);
  }

  onSendMessageDrawer() {
    this.showSendMessageDrawer = !this.showSendMessageDrawer
  }
}
