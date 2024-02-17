import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileUploadEvent} from "primeng/fileupload";

@Component({
  selector: 'app-de-send-message',
  templateUrl: './de-send-message.component.html',
  styleUrls: ['./de-send-message.component.css']
})
export class DeSendMessageComponent {
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
