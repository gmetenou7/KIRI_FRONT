import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModele} from "../models/product.modele";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProduct() {
    return this.http.get<any>('assets/json-mock/products.json')
      .toPromise()
      .then(res => res.data as ProductModele[])
      .then(data => data);
  }
}
