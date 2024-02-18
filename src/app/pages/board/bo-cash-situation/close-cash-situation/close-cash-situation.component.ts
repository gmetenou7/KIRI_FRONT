import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-close-cash-situation',
  templateUrl: './close-cash-situation.component.html',
  styleUrls: ['./close-cash-situation.component.css']
})
export class CloseCashSituationComponent {
  @Input("drawerVisible") showCloseCashSituationDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();

  startDate: Date[] | undefined;
  endDate: Date[] | undefined;
  onDrawerHide() {
    this.drawerClose.emit()
  }
}
