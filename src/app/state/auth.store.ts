import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
export interface AuthState {
  token: string;
  id: string;
  email: string;
}

export function createAuth() {
  return {
    token: null,
    id: null,
    email: null,

  } as AuthState;
}

//const selectToken: PersistStateSelectFn<AuthState> = (state) => ({ token: state.token });
//selectToken.storeName = 'auth';
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })


export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createAuth());
  }

  setToken(token: string, id: string, email: string) {
    this.update({token, id, email});
  }


  clearStore(): void {
    createAuth()
  }

}
