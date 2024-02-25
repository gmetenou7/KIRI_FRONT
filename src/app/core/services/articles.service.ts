import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ArticlesModeleInterface} from "../models/articles.modele.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient,
  ) { }

  getArticles() {
    return this.http.get<any>('assets/json-mock/articles.json')
      .toPromise()
      .then(res => res.data as ArticlesModeleInterface[])
      .then(data => data);
  }
}
