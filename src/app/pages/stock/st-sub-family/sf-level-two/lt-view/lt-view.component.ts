import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FamilyModelInterface } from 'src/app/core/models/family.model.interface';

@Component({
  selector: 'app-lt-view',
  templateUrl: './lt-view.component.html',
  styleUrls: ['./lt-view.component.css']
})
export class LtViewComponent implements OnInit, OnDestroy {
  @Input("drawerVisible") familyViewStateDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose: EventEmitter<any> = new EventEmitter<any>();
  @Input("useAs") useDrawerAs?: 'update' | 'create' | 'detail';
  @Input("subFamily") subFamily?: FamilyModelInterface;
  @Input('families') families?: FamilyModelInterface[];
  selectedFamily?: FamilyModelInterface;


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
