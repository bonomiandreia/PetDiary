import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
export interface AuthState {
  auth: {
    _id: string;
    email: string;
  }
  token: string

}

export function createAuth() {
  return {} as AuthState;
}

//const selectToken: PersistStateSelectFn<AuthState> = (state) => ({ token: state.token });
//selectToken.storeName = 'auth';
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })


export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createAuth());
  }

}
