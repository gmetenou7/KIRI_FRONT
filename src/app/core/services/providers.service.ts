import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderModelInterface } from '../models/provider.model.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProviders() {
    return this.http.get<any>('assets/json-mock/providers.json')
      .toPromise()
      .then(res => res.data as ProviderModelInterface[])
      .then(data => data);
  }
}
