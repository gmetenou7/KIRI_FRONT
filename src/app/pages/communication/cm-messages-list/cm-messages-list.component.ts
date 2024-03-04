import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {NavigationStart, Router} from "@angular/router";
import {ClientService} from "../../../core/services/client.service";
import {MessagesService} from "../../../core/services/messages.service";
import {MessageModelInterface} from "../../../core/models/message.model.interface";
import {ClientModele} from "../../../core/models/client.modele";
import {Table} from "primeng/table";

@Component({
  selector: 'app-cm-messages-list',
  templateUrl: './cm-messages-list.component.html',
  styleUrls: ['./cm-messages-list.component.css']
})
export class CmMessagesListComponent implements OnInit, OnDestroy {

  routeSubscription!: Subscription;

  showNewMessageDrawer: boolean = false;
  showPreSavedMessageDrawer: boolean = false;

  loadingMessages: boolean = true;
  loadingClients: boolean = true

  messagesList: MessageModelInterface[] = [];
  clientsList: ClientModele[] = [];

  selectedMessage?: MessageModelInterface;

  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private router: Router,
    private clientService: ClientService,
    private messageService:MessagesService
  ) {
  }

  ngOnInit() {
    this.messageService.getAllMessages().then(data => {
        this.loadingMessages = false;
        this.messagesList = data;
    });
    this.clientService.getAllClient().then(data => {
      this.loadingClients = false;
      console.log(data)
      this.clientsList = data
    })
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const action = event.url.split("action=")[1]
        if (action==="new-message") {
          this.onShowNewMessageDrawer()
        }
        if (action==="pre-saved-messages") {
          this.onShowPreSaveMessageDrawer()
        }
      }
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  onShowNewMessageDrawer(closed:boolean =false) {
    this.showNewMessageDrawer = !this.showNewMessageDrawer
    console.log("Open new")
  }

  onShowPreSaveMessageDrawer(closed:boolean =false) {
    this.showPreSavedMessageDrawer = !this.showPreSavedMessageDrawer
    console.log("Open pr")
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
