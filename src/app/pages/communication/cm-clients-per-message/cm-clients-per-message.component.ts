import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageModelInterface} from "../../../core/models/message.model.interface";

@Component({
  selector: 'app-cm-clients-per-message',
  templateUrl: './cm-clients-per-message.component.html',
  styleUrls: ['./cm-clients-per-message.component.css']
})
export class CmClientsPerMessageComponent implements OnInit {

    @Input("drawerVisible") clientPerMessageDrawer: boolean = false;
    @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
    @Input("selectMessage") singleMessage?:MessageModelInterface;

    constructor() {
    }

    ngOnInit() {
    }

    onDrawerHide() {
      this.drawerClose.emit()
    }

  protected readonly Array = Array;
}
