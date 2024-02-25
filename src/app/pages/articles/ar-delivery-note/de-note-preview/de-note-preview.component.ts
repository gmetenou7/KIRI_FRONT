import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticlesModeleInterface} from "../../../../core/models/articles.modele.interface";

@Component({
  selector: 'app-de-note-preview',
  templateUrl: './de-note-preview.component.html',
  styleUrls: ['./de-note-preview.component.css']
})
export class DeNotePreviewComponent implements OnInit{

  @Input("drawerVisible") deliveryNotePreviewDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  @Input('deliveryNote') deliveryNote: ArticlesModeleInterface|undefined;

  exportOptions:string[] = [];
  selectedExportOption: string|undefined;

  noteSigned: boolean = false;

  constructor() {
  }
  ngOnInit() {
    this.exportOptions = ['Excel', 'PDF', 'WhatsApp', 'Email']
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }
}
