import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUsedLanguage: string;
  constructor(private translate: TranslateService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.currentUsedLanguage = this.translate.getDefaultLang();
  }

  changeLang(lang: string): void {
    this.translate.use(lang);
    this.currentUsedLanguage = lang;
    if (lang === 'en') {
      this.renderer.setAttribute(document.body, 'dir', 'ltr');
      this.renderer.removeClass(document.body, 'body--rtl');
    } else {
      this.renderer.setAttribute(document.body, 'dir', 'rtl');
      this.renderer.addClass(document.body, 'body--rtl');
    }
  }
}
