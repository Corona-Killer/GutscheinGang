import { ReduxError, Error } from '../../error';

export interface SignupError extends ReduxError {
  firstName?: Error;
  lastName?: Error;
  email?: Error;
  password?: Error;
  confirmPassword?: Error;
}

export interface LoginError extends ReduxError {
  email?: Error;
  password?: Error;
}