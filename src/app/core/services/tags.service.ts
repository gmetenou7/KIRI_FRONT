import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TagsModelInterface } from '../models/tags.model.interface';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTags() {
    return this.http.get<any>('assets/json-mock/tags.json')
      .toPromise()
      .then(res => res.data as TagsModelInterface[])
      .then(data => data);
  }
}
