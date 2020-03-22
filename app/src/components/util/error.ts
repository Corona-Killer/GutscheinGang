import { Error, ReduxError } from '../../store/error';

export const DEFAULT_ERROR_MESSAGE = 'Etwas ist schiefgelaufen.';

export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  errors: _Error[];
  message: string;
  path: string;
}

interface _Error {
  codes: string[];
  arguments: (ErrorArgument | number)[];
  defaultMessage: string;
  objectName: string;
  field: string;
  rejectedValue?: any;
  bindingFailure: boolean;
  code: string;
}

interface ErrorArgument {
  codes: string[];
  arguments?: any;
  defaultMessage: string;
  code: string;
}

export function mapErrorToReduxError(error: any): ReduxError {
  let errorObject: ReduxError;

  if (error.response.data && error.response.status >= 400 && error.response.status < 500) {
    errorObject = mapErrorResponseToErrorObject(error.response.data);
  } else {
    errorObject = { general: { message: DEFAULT_ERROR_MESSAGE } };
  }

  return errorObject;
}

/**
 * Map error from backend to redux error object
 * @param {ErrorResponse} errorResponse Error response from the backend
 */
export function mapErrorResponseToErrorObject(errorResponse: any): ReduxError {
  let errorObject: {
    [x: string]: Error;
  } = {};

  console.log(errorResponse);

  errorResponse.errors.forEach((error: _Error) => {
    errorObject[error.field] = {
      message: error.defaultMessage,
      code: error.code
    };
  });

  return errorObject;
}