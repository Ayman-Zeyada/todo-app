import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StorageService } from './core/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private storage: StorageService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const currentLang = this.storage.getCurrentLang() || 'en';
    this.translate.setDefaultLang(currentLang);
    this.translate.use(currentLang);
    if (currentLang === 'en') {
      this.renderer.setAttribute(document.body, 'dir', 'ltr');
      this.renderer.removeClass(document.body, 'body--rtl');
    } else {
      this.renderer.setAttribute(document.body, 'dir', 'rtl');
      this.renderer.addClass(document.body, 'body--rtl');
    }
  }
}
