import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ArticlesModeleInterface} from "../../../core/models/articles.modele.interface";

@Component({
  selector: 'app-ar-article-detail',
  templateUrl: './ar-article-detail.component.html',
  styleUrls: ['./ar-article-detail.component.css']
})
export class ArArticleDetailComponent {
  @Input("drawerVisible") articleDetailDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose:EventEmitter<any> = new  EventEmitter<any>();
  @Input('article') singleArticle: ArticlesModeleInterface|undefined;

  constructor() {
  }

  ngOnInit() {
  }

  onDrawerHide() {
    this.drawerClose.emit()
  }
}
