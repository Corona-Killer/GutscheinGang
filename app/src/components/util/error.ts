import { Error, ReduxError } from '../../store/error';

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

/**
 * Map error from backend to redux error object
 * @param {ErrorResponse} errorResponse Error response from the backend
 */
export function mapErrorResponseToErrorObject(errorResponse: ErrorResponse): ReduxError {
  let errorObject: {
    [x: string]: Error;
  } = {};

  errorResponse.errors.forEach((error: _Error) => {
    errorObject[error.field] = {
      message: error.defaultMessage,
      code: error.code
    };
  });

  return errorObject;
}