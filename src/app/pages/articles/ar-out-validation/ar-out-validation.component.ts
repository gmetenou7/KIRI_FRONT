import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticlesModeleInterface} from "../../../core/models/articles.modele.interface";
import {ClientModele} from "../../../core/models/client.modele";
import {ClientService} from "../../../core/services/client.service";

@Component({
  selector: 'app-ar-out-validation',
  templateUrl: './ar-out-validation.component.html',
  styleUrls: ['./ar-out-validation.component.css']
})
export class ArOutValidationComponent implements OnInit{
  @Input("drawerVisible") outValidationDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  @Input("selectedArticles") articles?:ArticlesModeleInterface[] = [];

  clients: ClientModele[] = [];
  selectClient!: ClientModele | undefined;
  selectedOutValidation:ArticlesModeleInterface|undefined;

  // Loading State
  loadingClient: boolean = true;

  showPreviewOutValidationDrawer: boolean = false;

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

  onShowOutValidationDrawer() {
    this.showPreviewOutValidationDrawer = !this.showPreviewOutValidationDrawer;
  }
}
