import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  login(email, password) {
    const body = {
      "email": email,
      "password": password
    }
    return this.http.post(this.url+'users/auth', body)
  }

}
