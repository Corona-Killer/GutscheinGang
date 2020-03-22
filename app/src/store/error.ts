export interface Error {
  message: string;
  code?: string | number;
}

export interface ReduxError {
  general?: Error;
  [x: string]: Error | undefined;
}