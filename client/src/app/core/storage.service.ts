import { Injectable } from '@angular/core';
import { UserResponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly currentUserKey = 'currentUser';
  private readonly currentUsedLanguage = 'currentLanguage';

  constructor() {}
  setCurrentUser(user: UserResponse): void {
    this.setItem(this.currentUserKey, user);
  }

  getCurrentUser(): UserResponse {
    return this.getItem(this.currentUserKey);
  }

  removeCurrentUser(): void {
    this.removeItem(this.currentUserKey);
  }

  setCurrentLang(lang: string): void {
    this.setItem(this.currentUsedLanguage, lang);
  }

  getCurrentLang(): 'en || ar' {
    return this.getItem(this.currentUsedLanguage);
  }

  removeCurrentLang(): void {
    this.removeItem(this.currentUsedLanguage);
  }

  private setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  private removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
