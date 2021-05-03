import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { AuthQuery } from '../state/auth.query';
import {  switchMap, take } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token$;
  constructor(public auth: AuthService, public authQuery: AuthQuery) {
    this.token$ = this.authQuery.token$;
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.token$.pipe(
      take(1),
      switchMap(token => {
          let headers = request.headers;
          headers = headers.set('auth', `${token}`);
          const requestCopy = request.clone({
              headers,
          });

          return next.handle(requestCopy);
      })
  );
  }
}
