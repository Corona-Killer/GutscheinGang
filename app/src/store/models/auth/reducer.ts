import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../users';
import { SignupError, LoginError } from './errors';

export interface AuthState {
  authenticated: boolean;
  user: User | null;
  loading: {
    signup: boolean;
    login: boolean;
  };
  errors: {
    signup: SignupError | null;
    login: LoginError | null;
  };
}

const initialState: AuthState = {
  authenticated: false,
  user: null,
  loading: {
    signup: false,
    login: false
  },
  errors: {
    signup: null,
    login: null
  }
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupSetUser: (state: AuthState, action: PayloadAction<User>) => {
      state.authenticated = true;
      state.user = action.payload;
      state.loading.signup = false;
      state.errors.signup = null;
    },
    signupSetLoading: (state: AuthState) => {
      state.loading.signup = true;
    },
    signupSetErrors: (state: AuthState, action: PayloadAction<SignupError>) => {
      state.loading.signup = false;
      state.errors.signup = action.payload;
    },

    loginSetUser: (state: AuthState, action: PayloadAction<User>) => {
      state.authenticated = true;
      state.user = action.payload;
      state.loading.login = false;
      state.errors.login = null;
    },
    loginSetLoading: (state: AuthState) => {
      state.loading.login = true;
    },
    loginSetErrors: (state: AuthState, action: PayloadAction<LoginError>) => {
      state.loading.login = false;
      state.errors.login = action.payload;
    },
  }
});

export const actions = slice.actions;
export default slice.reducer;