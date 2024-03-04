import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageModelInterface} from "../models/message.model.interface";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMessages() {
    return this.http.get<any>('assets/json-mock/messages.json')
      .toPromise()
      .then(res => res.data as MessageModelInterface[])
      .then(data => data);
  }
}
