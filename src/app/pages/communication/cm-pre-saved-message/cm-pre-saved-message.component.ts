import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MessagesService} from "../../../core/services/messages.service";
import {MessageModelInterface} from "../../../core/models/message.model.interface";
import {Table} from "primeng/table";

@Component({
  selector: 'app-cm-pre-saved-message',
  templateUrl: './cm-pre-saved-message.component.html',
  styleUrls: ['./cm-pre-saved-message.component.css']
})
export class CmPreSavedMessageComponent implements OnInit {

  @Input("drawerVisible") preSavedMessageDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();

  messages: MessageModelInterface[] = [];
  loadingMessages: boolean = true;
  showMessageDetailDrawer: boolean = false;
  showNewMessageDrawer: boolean = false;
  messageAsPreSaved:boolean = false;
  selectedMessage?: MessageModelInterface;

  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private messageService: MessagesService,
  ) {
  }
  ngOnInit() {
    this.messageService.getAllMessages().then(data => {
      this.loadingMessages = false;
      this.messages = data;
    })
  }

  // Handle global filter on messages table
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }

  onShowMessageDetailDrawer() {
    this.showMessageDetailDrawer = !this.showMessageDetailDrawer
  }

  onShowNewMessageDrawer() {
    this.showNewMessageDrawer = !this.showNewMessageDrawer
  }

}
