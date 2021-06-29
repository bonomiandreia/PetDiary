import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http: HttpClient, public router: Router) { }


  create(body: Login) {
    return this.http.post(`${environment.url}users/create`, body).subscribe(() => {
      this.router.navigate(['/login']);
    })
  }
}
