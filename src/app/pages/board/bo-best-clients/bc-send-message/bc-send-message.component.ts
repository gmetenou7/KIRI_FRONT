import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileUploadEvent} from "primeng/fileupload";

@Component({
  selector: 'app-bc-send-message',
  templateUrl: './bc-send-message.component.html',
  styleUrls: ['./bc-send-message.component.css']
})
export class BcSendMessageComponent {
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
