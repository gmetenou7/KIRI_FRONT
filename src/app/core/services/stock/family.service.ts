import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ArticlesModeleInterface} from "../../models/articles.modele.interface";
import {FamilyModelInterface} from "../../models/family.model.interface";

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(
    private http: HttpClient
  ) { }

  getAllFamilies() {
    return this.http.get<any>('assets/json-mock/families.json')
      .toPromise()
      .then(res => res.data as FamilyModelInterface[])
      .then(data => data);
  }
}
