import { Injectable } from '@angular/core';
import { Query, StoreConfig } from '@datorama/akita';

// store components
import { AuthState, AuthStore } from './auth.store';
// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends Query<AuthState> {
    readonly isLogged$: Observable<boolean>;
    readonly token$: Observable<string>;
    readonly idUser$: Observable<string>;
    readonly email$: Observable<string>;

    constructor(protected store: AuthStore) {
        super(store);

        this.isLogged$ = this.select(state => !!state.token);
        this.token$ = this.select('token');
        this.idUser$ = this.select('id');
        this.email$ = this.select('email');
    }
}
