import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticlesModeleInterface} from "../../../core/models/articles.modele.interface";
import {ClientModele} from "../../../core/models/client.modele";
import {ClientService} from "../../../core/services/client.service";

@Component({
  selector: 'app-ar-proformat',
  templateUrl: './ar-proformat.component.html',
  styleUrls: ['./ar-proformat.component.css']
})
export class ArProformatComponent implements OnInit{

  @Input("drawerVisible") proformatDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  @Input("selectedArticles") articles:ArticlesModeleInterface[] = [];


  clients: ClientModele[] = [];
  selectClient!: ClientModele | undefined;
  taxes: string[] = [];
  showProformatPreviewDrawer: boolean = false

  // Loading State
  loadingClient: boolean = true;

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
    this.drawerClose.emit();
  }

  onRemoveArticles(article:ArticlesModeleInterface) {
    this.articles = this.articles.filter(_article => _article.code != article.code);
  }

  onShowProformatPreviewDrawer() {
    this.showProformatPreviewDrawer = !this.showProformatPreviewDrawer;
  }
}

