import { makeAutoObservable } from 'mobx';

import { UserType } from '../types/types';

class UserStore {
  user: UserType | undefined;
  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: UserType) {
    this.user = user;
  }

  removeUser() {
    this.user = undefined;
  }
}

export const userStore = new UserStore();
