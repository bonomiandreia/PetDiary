import { Injectable } from '@angular/core';
import { EntityState, Store, StoreConfig } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })

export interface AuthState {
  token: string;
  id: string;
}

export function createAuth() {
  return {
    token: null,
    id: null,
  } as AuthState;
}

export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createAuth());
  }

  setToken(token: string, id: string) {
    this.update({token, id});
  }

}
