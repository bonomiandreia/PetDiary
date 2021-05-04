import { Injectable } from '@angular/core';
import { Query, StoreConfig } from '@datorama/akita';

// store components
import { AuthState, AuthStore } from './auth.store';
import { persistState } from '@datorama/akita';
// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'token' })
export class AuthQuery extends Query<AuthState> {
    readonly isLogged$: Observable<boolean>;
    readonly token$: Observable<string>;

    constructor(protected store: AuthStore) {
        super(store);

        this.isLogged$ = this.select(state => !!state.token);
        this.token$ = this.select('token');
    }
}
