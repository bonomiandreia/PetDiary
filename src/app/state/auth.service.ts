import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../models/login.response.model';

@Injectable({ providedIn: 'root' })
export class AuthServiceAkita {
  constructor(private authStore: AuthStore, private http: HttpClient, private router: Router) {
  }

  login(body: Login) {
    return this.http.post(`${environment.url}users/auth`, body).subscribe((data: LoginResponse) => {
      this.authStore.setToken(data.token, data._id)
      this.router.navigate(['posts']);
  })
  }

}