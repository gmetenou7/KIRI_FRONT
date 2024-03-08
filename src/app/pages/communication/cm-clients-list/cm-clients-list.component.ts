import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ClientModele} from "../../../core/models/client.modele";
import {ClientService} from "../../../core/services/client.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-cm-clients-list',
  templateUrl: './cm-clients-list.component.html',
  styleUrls: ['./cm-clients-list.component.css']
})
export class CmClientsListComponent implements OnInit{
  @Input("drawerVisible") clientsListDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();

  clients: ClientModele[] = [];
  selectedClients?: ClientModele[];

  loadingClient: boolean = true;

  showNewMessageDrawer: boolean = false;

  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private clientService: ClientService
  ) {
  }

  ngOnInit() {
    this.clientService.getAllClient().then(data => {
      this.clients = data;
      this.loadingClient = false;
    })
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  load() {
    this.loadingClient = true;
    setTimeout(() => {
      this.loadingClient = false;
    }, 2000);
  }

  onShowNewMessageDrawer() {
    this.showNewMessageDrawer = !this.showNewMessageDrawer;
  }
}
