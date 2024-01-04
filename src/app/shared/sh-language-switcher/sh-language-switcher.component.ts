import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-sh-language-switcher',
  templateUrl: './sh-language-switcher.component.html',
  styleUrls: ['./sh-language-switcher.component.css']
})
export class ShLanguageSwitcherComponent implements OnInit {
  languages: {name: string, code: string, flag:string}[] | undefined;

  selectedLanguage: {name: string, code: string, flag:string} | undefined;
  constructor(
    public translate: TranslateService

  ) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.languages = [
      {
        name: 'Français',
        code: 'FR',
        flag: "https://flagpedia.net/data/flags/w702/fr.webp"
      },
      {
        name: 'Anglais',
        code: 'EN',
        flag: "https://flagpedia.net/data/flags/w702/gb-eng.webp"
      }
    ];

    this.selectedLanguage = this.languages.find(language => language.code.toLowerCase() === this.translate.currentLang);
  }

  changeLanguage(event: {name: string, code: string, flag:string}) {
    const code = event.code.toLowerCase();
    this.translate.use(code);
  }

}
