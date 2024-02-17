import {Component, ElementRef, ViewChild} from '@angular/core';
import {ClientModele} from "../../../core/models/client.modele";
import {ProductModele} from "../../../core/models/product.modele";
import {ClientService} from "../../../core/services/client.service";
import {Table} from "primeng/table";
import {DebtsModele} from "../../../core/models/debts.modele";
import {DebtsService} from "../../../core/services/debts.service";

@Component({
  selector: 'app-bo-debts',
  templateUrl: './bo-debts.component.html',
  styleUrls: ['./bo-debts.component.css']
})
export class BoDebtsComponent {
  years: Array<number> = [];
  agencies:Array<{name: string, id:number, ca: number}> = [];
  clients:Array<{name: string, id:number, ca: number}> = [];
  debts: DebtsModele[] = [];
  selectedDebts: DebtsModele[] = [];
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
    private clientsService: DebtsService
  ) {
  }
  ngOnInit() {
    this.years = this.getYearsUntil(2000);
    this.clientsService.getAllDebts().then((data) => {
      this.loading = false;
      this.debts = data
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
