import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FamilyModelInterface} from "../../../../core/models/family.model.interface";

@Component({
  selector: 'app-st-family-view',
  templateUrl: './st-family-view.component.html',
  styleUrls: ['./st-family-view.component.css']
})
export class StFamilyViewComponent implements OnInit, OnDestroy {
  @Input("drawerVisible") familyViewStateDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  @Input("useAs") useDrawerAs?: 'update' | 'create' | 'detail';
  @Input("family") selectedFamily?: FamilyModelInterface;

  constructor() {
  }
  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }
}
