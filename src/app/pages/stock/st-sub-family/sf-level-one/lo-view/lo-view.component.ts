import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FamilyModelInterface } from 'src/app/core/models/family.model.interface';

@Component({
  selector: 'app-lo-view',
  templateUrl: './lo-view.component.html',
  styleUrls: ['./lo-view.component.css']
})
export class LoViewComponent implements OnInit, OnDestroy {
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
