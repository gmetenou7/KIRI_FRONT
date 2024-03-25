import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VariantModalInterface } from '../../models/variant.model.interface';

@Injectable({
  providedIn: 'root'
})
export class VariantService {

  constructor(
    private http: HttpClient
  ) { }

  getAllVariants() {
    return this.http.get<any>('assets/json-mock/variants.json')
      .toPromise()
      .then(res => res.data as VariantModalInterface[])
      .then(data => data);
  }
}
