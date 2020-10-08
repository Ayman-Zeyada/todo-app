import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPayload, UserResponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signUp(user: UserPayload): Observable<UserResponse> {
    return this.http.post<UserResponse>('/api/users', user);
  }
}
