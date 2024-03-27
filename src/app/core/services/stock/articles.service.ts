import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockArticleModelInterface } from '../../models/stock-article.model.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllArticles() {
    return this.http.get<any>('assets/json-mock/stock-articles.json')
      .toPromise()
      .then(res => res.data as StockArticleModelInterface[])
      .then(data => data);
  }

}
