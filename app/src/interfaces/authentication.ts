import { User } from '../store/models/users';

export interface Authentication {
  authenticated: boolean;
  user: User | null;
  loading: boolean;
}