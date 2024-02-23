import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ArticlesService} from "../../../core/services/articles.service";
import {ArticlesModeleInterface} from "../../../core/models/articles.modele.interface";
import {Table} from "primeng/table";

@Component({
  selector: 'app-ar-list-articles',
  templateUrl: './ar-list-articles.component.html',
  styleUrls: ['./ar-list-articles.component.css']
})
export class ArListArticlesComponent implements OnInit{

  articles: ArticlesModeleInterface[] = [];
  selectedArticles: ArticlesModeleInterface[] = [];
  selectedSingleArticle: ArticlesModeleInterface|undefined;
  articlesFamilies: {id: number, name: string}[] = [];
  selectedFamily: {id: number, name: string} | undefined;

  loading: boolean = true;

  // Actions buttons state are define here
  showExportDrawer: boolean = false;
  showArticleDetailDrawer: boolean = false;

  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private articlesService: ArticlesService
  ) {
  }

  ngOnInit() {
    this.articlesService.getArticles().then(data => {
      this.loading = false;
      this.articles = data
    });
    this.articlesFamilies = [
      {
        id: 1,
        name: 'Famille 1'
      },
      {
        id: 2,
        name: 'Famille 2'
      }
    ]
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

  // Action buttons drawer callback
  onShowExportOptionDrawer() {
    this.showExportDrawer = !this.showExportDrawer
  }

  onShowArticleDetailDrawer() {
    this.showArticleDetailDrawer = !this.showArticleDetailDrawer
  }
}
