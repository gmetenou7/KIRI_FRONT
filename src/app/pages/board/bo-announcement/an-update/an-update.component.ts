import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileUploadEvent} from "primeng/fileupload";

@Component({
  selector: 'app-an-update',
  templateUrl: './an-update.component.html',
  styleUrls: ['./an-update.component.css']
})
export class AnUpdateComponent {
  @Input("drawerVisible") updateAnnouncementDrawer: boolean = false;
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
