import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticlesModeleInterface} from "../../../../core/models/articles.modele.interface";

@Component({
  selector: 'app-ou-validation-preview',
  templateUrl: './ou-validation-preview.component.html',
  styleUrls: ['./ou-validation-preview.component.css']
})
export class OuValidationPreviewComponent implements OnInit {
  @Input("drawerVisible") outValidationPreviewDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  @Input('outValidation') outValidation: ArticlesModeleInterface|undefined;

  constructor() {
  }
  ngOnInit() {
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }
}
