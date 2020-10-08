import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentUser = this.auth.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    if (isLoggedIn) {
      request = request.clone({
        setHeaders: {
          'x-header-token': currentUser.token,
        },
      });
    }

    return next.handle(request);
  }
}
