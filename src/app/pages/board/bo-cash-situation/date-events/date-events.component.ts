import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-date-events',
  templateUrl: './date-events.component.html',
  styleUrls: ['./date-events.component.css']
})
export class DateEventsComponent {
  @Input("drawerVisible") showDateEventDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();

  onDrawerHide() {
    this.drawerClose.emit()
  }
}
