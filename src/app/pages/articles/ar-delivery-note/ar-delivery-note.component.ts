import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientModele} from "../../../core/models/client.modele";
import {ClientService} from "../../../core/services/client.service";
import {ArticlesModeleInterface} from "../../../core/models/articles.modele.interface";

@Component({
  selector: 'app-ar-delivery-note',
  templateUrl: './ar-delivery-note.component.html',
  styleUrls: ['./ar-delivery-note.component.css']
})
export class ArDeliveryNoteComponent implements OnInit{
  @Input("drawerVisible") deliveryNoteDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  @Input("selectedArticles") articles?:ArticlesModeleInterface[] = [];

  clients: ClientModele[] = [];
  selectClient!: ClientModele | undefined;
  selectedDeliveryNote:ArticlesModeleInterface|undefined;

  // Loading State
  loadingClient: boolean = true;

  showPreviewDeliveryNoteDrawer: boolean = false;

  constructor(
    private clientService: ClientService,
  ) {
  }

  ngOnInit() {
    this.clientService.getAllClient().then(data => {
      this.clients = data;
      this.loadingClient = false;
    });
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }

  onShowDeliveryNoteDrawer() {
    this.showPreviewDeliveryNoteDrawer = !this.showPreviewDeliveryNoteDrawer;
  }
}
