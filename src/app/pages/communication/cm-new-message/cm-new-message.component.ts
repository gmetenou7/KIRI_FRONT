import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from "../../../core/services/client.service";
import {ClientModele} from "../../../core/models/client.modele";
import {MessageModelInterface} from "../../../core/models/message.model.interface";
import {FileUploadEvent} from "primeng/fileupload";

@Component({
  selector: 'app-cm-new-message',
  templateUrl: './cm-new-message.component.html',
  styleUrls: ['./cm-new-message.component.css']
})
export class CmNewMessageComponent implements OnInit {
  @Input("drawerVisible") newMessageDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  @Input('selectedClients') selectedClients?: ClientModele[];
  @Input('preSavedMessage') preSavedMessage?:MessageModelInterface;
  @Input("isPreSaved") isPreSavedMessage?: boolean = false;

  text?: string;

  clients: ClientModele[] = [];

  channels: Array<string> = ['SMS', 'whatsapp', 'Email'];
  selectedChannel?:string;
  uploadedFiles: any[] = [];
  constructor(
    private clientService: ClientService,
  ) {
  }

  ngOnInit() {
    this.clientService.getAllClient().then(data => {
      this.clients = data;
    })
  }

  onDrawerHide() {
    this.isPreSavedMessage = false;
    this.drawerClose.emit()
  }

  onUpload(event: FileUploadEvent) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

}
