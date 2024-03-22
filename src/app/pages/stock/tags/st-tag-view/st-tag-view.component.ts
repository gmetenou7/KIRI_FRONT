import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TagsModelInterface } from 'src/app/core/models/tags.model.interface';

@Component({
  selector: 'app-st-tag-view',
  templateUrl: './st-tag-view.component.html',
  styleUrls: ['./st-tag-view.component.css']
})
export class StTagViewComponent implements OnInit, OnDestroy {
  @Input("drawerVisible") tagViewStateDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose: EventEmitter<any> = new EventEmitter<any>();
  @Input("useAs") useDrawerAs?: 'update' | 'create' | 'detail';
  @Input("tag") selectedTag?: TagsModelInterface;

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
