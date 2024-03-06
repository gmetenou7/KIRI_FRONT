import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import { NavigationStart, Router} from "@angular/router";
import {ClientService} from "../../../core/services/client.service";
import {MessagesService} from "../../../core/services/messages.service";
import {MessageModelInterface} from "../../../core/models/message.model.interface";
import {ClientModele} from "../../../core/models/client.modele";
import {Table} from "primeng/table";

@Component({
  selector: 'app-cm-messages-list',
  templateUrl: './cm-messages-list.component.html',
  styleUrls: ['./cm-messages-list.component.css'],
})
export class CmMessagesListComponent implements OnInit, OnDestroy {

  routeSubscription!: Subscription;

  showNewMessageDrawer: boolean = false;
  showPreSavedMessageDrawer: boolean = false;
  showMessageDetailDrawer: boolean = false;
  showClientsPerMessageDrawer: boolean = false;
  createNewMessageDialog: boolean = false

  loadingMessages: boolean = true;
  loadingClients: boolean = true

  messagesList: MessageModelInterface[] = [];
  clientsList: ClientModele[] = [];

  selectedMessage?: MessageModelInterface;

  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private router: Router,
    private clientService: ClientService,
    private messageService:MessagesService,
  ) {
  }

  ngOnInit() {
    this.clearUrlParams();
    this.messageService.getAllMessages().then(data => {
        this.loadingMessages = false;
        this.messagesList = data;
    });
    this.clientService.getAllClient().then(data => {
      this.loadingClients = false;
      this.clientsList = data
    })

    this.onRouterEvent();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  // Handle show create new message drawer
  onShowNewMessageDrawer(closed:boolean =false) {
    this.showNewMessageDrawer = !this.showNewMessageDrawer
    if (closed) {
      this.clearUrlParams()
    }
  }

  // Handle show all pre-saved messages drawer
  onShowPreSaveMessagesDrawer(closed:boolean =false) {
    this.showPreSavedMessageDrawer = !this.showPreSavedMessageDrawer;
    if (closed) {
      this.clearUrlParams()
    }
  }

  // Handle show message details drawer
  onShowMessageDetailDrawer() {
    this.showMessageDetailDrawer = !this.showMessageDetailDrawer
  }

  // Handle show clients per message drawer
  onShowClientParMessageDrawer() {
    this.showClientsPerMessageDrawer = !this.showClientsPerMessageDrawer;
  }

  // Handle show confirm message dialog and further actions
  onConfirmCreateNewMessage(newMessage?: boolean, preSaveMessage?:boolean) {
    this.createNewMessageDialog = !this.createNewMessageDialog;

    if (newMessage) {
      this.onShowNewMessageDrawer();
    }

    if (preSaveMessage) {
      this.onShowPreSaveMessagesDrawer();
    }
  }

  // Handle global filter on messages table
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  // Listen to router event and query the url params to performs further actions
  onRouterEvent() {
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const action = event.url.split("action=")[1]
        if (action==="new-message") {
          this.onConfirmCreateNewMessage();
        }
        if (action==="pre-saved-messages") {
          this.onShowPreSaveMessagesDrawer()
        }
      }
    })
  }

  // Clear url params on demand
  clearUrlParams() {
    this.router.navigate([], {
      queryParams: {},
      queryParamsHandling: ''
    }).then(r => {});
  }

  protected readonly closed = closed;
}
