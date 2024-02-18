import { Component, OnInit } from '@angular/core';
import {Message, PrimeNGConfig} from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService] // or import globally in module Providers
})
export class AppComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private config: PrimeNGConfig
  ) {
  }

  title = 'kiri front-end';
  messages: Message[] = [];

  ngOnInit() {
    this.config.setTranslation({
      accept: 'Accepter',
      reject: 'Rejeter',
      monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Jouin', 'Juillet', 'Aougt', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
      dayNames: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    })
    this.messages = [
      { severity: 'success', summary: 'Success', detail: 'Bienvenu sur le projet kiri system front' }
    ];
  }


  // show the toast on button click
  showToast() {
    this.messageService.add({ severity: 'success', summary: 'Heading', detail: 'More details....' });
  }


}
