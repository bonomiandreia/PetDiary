import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../models/login.response.model';
import { Observable, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthServiceAkita {
  constructor(private authStore: AuthStore, private http: HttpClient, private router: Router) {
  }

  login(body: Login) {
    this.http.post<LoginResponse>(`${environment.url}users/auth`, body).subscribe((data: LoginResponse) => {
      this.authStore.update(data)
      this.router.navigate(['/posts']);
    })
  }

  logout(): void {
    localStorage.clear();
    this.authStore.reset();
    this.router.navigate(['/login']);
  }

}
