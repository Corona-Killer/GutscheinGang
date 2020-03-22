interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  errors: Error[];
  message: string;
  path: string;
}

interface Error {
  codes: string[];
  arguments: (Argument | number)[];
  defaultMessage: string;
  objectName: string;
  field: string;
  rejectedValue?: number;
  bindingFailure: boolean;
  code: string;
}

interface Argument {
  codes: string[];
  arguments?: any;
  defaultMessage: string;
  code: string;
}