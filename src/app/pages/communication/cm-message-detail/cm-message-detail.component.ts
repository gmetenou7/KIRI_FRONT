import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageModelInterface} from "../../../core/models/message.model.interface";

@Component({
  selector: 'app-cm-message-detail',
  templateUrl: './cm-message-detail.component.html',
  styleUrls: ['./cm-message-detail.component.css']
})
export class CmMessageDetailComponent implements OnInit {

  @Input("drawerVisible") messageDetailDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  @Input("selectMessage") singleMessage?:MessageModelInterface;
  @Input("isPreSaved") preSavedMessage?: boolean = false;

  shoClientPerMessageDrawer: boolean = false;

  constructor() {
  }
  ngOnInit() {
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }

  onShowClientPerMessageDrawer() {
    this.shoClientPerMessageDrawer = !this.shoClientPerMessageDrawer;
  }
}
