import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ar-export',
  templateUrl: './ar-export.component.html',
  styleUrls: ['./ar-export.component.css']
})
export class ArExportComponent implements OnInit{
  @Input("drawerVisible") exportArticlesDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();

  exportOptions:string[]= [];
  selectedExportOption: string|undefined;

  constructor() {
  }

  ngOnInit() {
    this.exportOptions = ['Excel', 'CSV', 'PDF', 'Email']
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }
}
