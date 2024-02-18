import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileUploadEvent} from "primeng/fileupload";

@Component({
  selector: 'app-cas-detail',
  templateUrl: './cas-detail.component.html',
  styleUrls: ['./cas-detail.component.css']
})
export class CasDetailComponent {
  @Input("drawerVisible") showDetailDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  onDrawerHide() {
    this.drawerClose.emit()
  }
}
