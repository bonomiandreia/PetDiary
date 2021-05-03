import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { LoginService } from '../services/login/login.service';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthServiceAkita {
  constructor(private authStore: AuthStore, private http: HttpClient, private router: Router) {
  }

  login(body: Login) {
    return this.http.post(`${environment.url}users/auth`, body).subscribe((data: {token: string, _id: string}) => {
      this.authStore.setToken(data.token, data._id)
      this.router.navigate(['posts']);
  })
  }

}
