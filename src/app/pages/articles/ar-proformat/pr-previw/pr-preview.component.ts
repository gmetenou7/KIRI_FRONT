import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pr-previw',
  templateUrl: './pr-preview.component.html',
  styleUrls: ['./pr-preview.component.css']
})
export class PrPreviewComponent implements OnInit{
  @Input("drawerVisible") proformatPreviewDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();

  exportOptions:string[]= [];
  selectedExportOption: string|undefined;

  constructor() {
  }

  ngOnInit() {

    this.exportOptions = ['Excel', 'PDF', 'WhatsApp', 'Email']
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }
}
