import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientModele} from "../models/client.modele";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  getAllClient() {
    return this.http.get<any>('assets/json-mock/clients.json')
      .toPromise()
      .then(res => res.data as ClientModele[])
      .then(data => data);
  }
}
