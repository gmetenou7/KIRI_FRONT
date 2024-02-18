import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {ProductModele} from "../../../core/models/product.modele";
import {ProductService} from "../../../core/services/product.service";

@Component({
  selector: 'app-bo-ppv',
  templateUrl: './bo-ppv.component.html',
  styleUrls: ['./bo-ppv.component.css']
})
export class BoPpvComponent implements OnInit{
  years: Array<number> = [];
  agencies:Array<{name: string, id:number, ca: number}> = [];
  clients:Array<{name: string, id:number, ca: number}> = [];
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

  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.years = this.getYearsUntil(2000);
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

    this.productService.getAllProduct().then(products => {
      this.loading = false;
      this.products = products
    });

  }

  getYearsUntil(year:number) {
    let currentYear = new Date().getFullYear();
    let yearsArray = [];
    for (let i = currentYear; i >= year; i--) {
      yearsArray.push(i);
    }
    return yearsArray;
  }


  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
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
}
