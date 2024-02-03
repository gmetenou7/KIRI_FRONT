import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-sh-language-switcher',
  templateUrl: './sh-language-switcher.component.html',
  styleUrls: ['./sh-language-switcher.component.css']
})
export class ShLanguageSwitcherComponent implements OnInit {
  languages: {name: string, code: string, flag:string}[] = [];
  options:MenuItem[] = [];

  selectedLanguage: {name: string, code: string, flag:string} = {name: '', code: '', flag:''};
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
        flag: "fr"
      },
      {
        name: 'Anglais',
        code: 'EN',
        flag: "gb"
      }
    ];

    this.options = [
      {
        label: 'Français',
        icon: 'fi fi-fr',
        command: () => {
          this.changeLanguage(this.languages[0]);
        }

      },
      {
        label: 'Anglais',
        icon: 'fi fi-gb',
        command: () => {
          this.changeLanguage(this.languages[1]);
        }
      }
    ];
    this.selectedLanguage = this.languages.find(language => language.code.toLowerCase() === this.translate.currentLang)!;
  }

  changeLanguage(event: {name: string, code: string, flag:string}) {
    this.selectedLanguage = event;
    const code = event.code.toLowerCase();
    this.translate.use(code);
  }

}
