import { Injectable } from '@angular/core';
import { Router,  CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthQuery } from '../state/auth.query';
import { tap, take } from 'rxjs/operators';
@Injectable()
export class AuthGuardService implements CanLoad {
  private readonly isLogged$: Observable<boolean>;
  constructor(public auth: AuthService, public router: Router, public authQuery: AuthQuery) {
    this.isLogged$ = this.authQuery.isLogged$;
  }
  canLoad(): boolean {
    this.isLogged$.subscribe(data => {
      if (!data) {
        return this.router.navigate(['/login']);
      }
    })
    return true;
  }
}