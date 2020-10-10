import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserCredentials, UserResponse } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserResponse>;
  public currentUser: Observable<UserResponse>;
  constructor(private http: HttpClient, private storageService: StorageService) {
    this.currentUserSubject = new BehaviorSubject<UserResponse>(
      this.storageService.getCurrentUser()
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
    this.storageService.removeCurrentUser();
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): UserResponse {
    return this.currentUserSubject.value;
  }

  setCurrentUser(user: UserResponse): void {
    this.storageService.setCurrentUser(user);
    this.currentUserSubject.next(user);
  }
}
