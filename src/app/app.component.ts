import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService] // or import globally in module Providers
})
export class AppComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  title = 'kiri front-end';

  messages: Message[] = [];

  ngOnInit() {
    this.messages = [
      { severity: 'success', summary: 'Success', detail: 'Bienvenu sur le projet kiri system front' }
    ];
  }


  // show the toast on button click
  showToast() {
    this.messageService.add({ severity: 'success', summary: 'Heading', detail: 'More details....' });
  }


}
