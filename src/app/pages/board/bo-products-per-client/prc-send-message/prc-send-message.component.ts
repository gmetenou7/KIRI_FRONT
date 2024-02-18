import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileUploadEvent} from "primeng/fileupload";

@Component({
  selector: 'app-prc-send-message',
  templateUrl: './prc-send-message.component.html',
  styleUrls: ['./prc-send-message.component.css']
})
export class PrcSendMessageComponent  {
  @Input("drawerVisible") sendMessageDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();

  uploadedFiles: any[] = [];


  onUpload(event: FileUploadEvent) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }
}
