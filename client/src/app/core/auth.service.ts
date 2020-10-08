import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserCredentials, UserResponse } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserResponse>;
  public currentUser: Observable<UserResponse>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserResponse>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(credentials: UserCredentials): Observable<UserResponse> {
    return this.http.post<any>('/api/auth', credentials).pipe(
      map((user) => {
        this.setCurrentUser(user);
        return user;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): UserResponse {
    return this.currentUserSubject.value;
  }

  setCurrentUser(user: UserResponse): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
}
