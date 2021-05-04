import { Injectable } from '@angular/core';
import { EntityState, Store, StoreConfig } from '@datorama/akita';
import { persistState, PersistStateSelectFn } from '@datorama/akita';

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

const selectToken: PersistStateSelectFn<AuthState> = (state) => ({ token: state.token });
selectToken.storeName = 'auth';
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })


export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createAuth());
  }

  setToken(token: string, id: string) {
    this.update({token, id});
    persistState({ select: [selectToken] });
  }


  clearStore(): void {
    this.reset();
  }

}
