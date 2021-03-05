import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  login(login: Login) {
    return this.http.post(this.url+'users/auth', login)
  }

  logout() {
    localStorage.removeItem('token');
  }
}
