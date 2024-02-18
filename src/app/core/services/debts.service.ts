import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DebtsModele} from "../models/debts.modele";

@Injectable({
  providedIn: 'root'
})
export class DebtsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDebts() {
    return this.http.get<any>('assets/json-mock/debts.json')
      .toPromise()
      .then(res => res.data as DebtsModele[])
      .then(data => data);
  }
}
