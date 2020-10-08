import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { UserResponse } from 'src/app/models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUsedLanguage: string;
  currentUser: UserResponse;
  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUsedLanguage = this.translate.getDefaultLang();
    this.auth.currentUser.subscribe((user) => (this.currentUser = user));
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

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
