import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { categories, vendors } from 'src/app/core/data/categories-vendors-data';
import { StockArticleModelInterface } from 'src/app/core/models/stock-article.model.interface';
import { ArticlesService } from 'src/app/core/services/stock/articles.service';

@Component({
  selector: 'app-art-list-articles',
  templateUrl: './art-list-articles.component.html',
  styleUrls: ['./art-list-articles.component.css']
})
export class ArtListArticlesComponent implements OnInit {

  selectedArticles?: StockArticleModelInterface[];
  articles: StockArticleModelInterface[] = [];
  loadingArticles: boolean = true;

  categories: string[] = categories;
  selectedCategory?: string
  vendors: string[] = vendors;
  selectedVendor?: string;

  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private articlesService: ArticlesService

  ) { }


  ngOnInit(): void {
    this.articlesService.getAllArticles().then(data => {
      this.articles = data;
      this.loadingArticles = false;
    })
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
