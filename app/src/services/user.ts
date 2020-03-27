import { AxiosResponse } from 'axios';
import { User } from '../store/models/users/index';
import http from './http';

export class UserService {
  observers: ((f: any) => void)[] = [];

  constructor() {
    this.observers = [];
  }

  async init() {
    const user = await this.getCurrentUser();
    this.changeAuthState(user);
  }

  public async onAuthStateChange(f: (user: User | null) => any): Promise<(f: any) => void> {
    this.observers.push(f);
    return this.unsubscribe;
  }

  private unsubscribe(f: any) {
    this.observers.filter(subscriber => subscriber !== f);
  }

  changeAuthState(user: User | null) {
    this.observers.forEach(observer => observer(user));
  }

  private getCurrentUser = async (): Promise<User | null> => {
    if (!localStorage.getItem('x-auth-token')) return null;

    // get user
    const { data }: AxiosResponse = await http.get('/user');
    const user: User = data;
    return user;
  };
}

const userService = new UserService();
userService.init();
export default userService;