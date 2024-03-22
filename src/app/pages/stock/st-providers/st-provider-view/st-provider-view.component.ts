import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProviderModelInterface } from 'src/app/core/models/provider.model.interface';

@Component({
  selector: 'app-st-provider-view',
  templateUrl: './st-provider-view.component.html',
  styleUrls: ['./st-provider-view.component.css']
})
export class StProviderViewComponent implements OnInit {

  @Input("drawerVisible") providerViewStateDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose: EventEmitter<any> = new EventEmitter<any>();
  @Input("useAs") useDrawerAs?: 'update' | 'create' | 'detail';
  @Input("provider") selectedTag?: ProviderModelInterface;
  emails?: string[] = [
    "johnsmith@gmail.com",
    "emilyjones@gmail.com",
    "michaelbrown@gmail.com"
  ]
  phones?: string[] = [
    "+237612345678",
    "+237612345679",
    "+237612345680"
  ]

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

