import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
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
    public translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }

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
