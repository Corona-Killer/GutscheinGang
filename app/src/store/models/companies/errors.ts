import { ReduxError, Error } from '../../error';

export interface GetError extends ReduxError { }
export interface AddError extends ReduxError {
  name?: Error;
  sector?: Error;
  postalCode?: Error;
  city?: Error;
  street?: Error;
  paypalAddress?: Error;
}