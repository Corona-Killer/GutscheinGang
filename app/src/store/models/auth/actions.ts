import { AnyAction, Dispatch } from 'redux';
import { User } from '../users';
import { actions as reducer } from './reducer';
import { AxiosResponse } from 'axios';
import http from '../../../services/http';
import { mapErrorToReduxError } from '../../../components/util/error';
import userService from '../../../services/user';
import { history } from '../../../history';

export interface SignupUserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginUserProps {
  email: string;
  password: string;
}

export const signupUser = (props: SignupUserProps) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(reducer.signupSetLoading());

  try {

  } catch (error) {
    console.error(error);
    return dispatch(reducer.signupSetErrors({ general: { message: error.message } }));
  }
};

export const loginUser = (props: LoginUserProps) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(reducer.loginSetLoading());

  try {
    const response = await http.post('/session', props);
    const token: string = response.headers['Authorization'];
    console.log(token);

    // Save token to local storage
    localStorage.setItem('x-auth-token', token);
    http.setJwt(token);

    // Get user
    const { data } = await http.get('/user');
    const user: User = data;

    dispatch(reducer.loginSetUser(user));
    userService.changeAuthState(user);

    // get 'from' from location
    const { from } = history.location.state as any || { from: { pathname: '/' } };
    history.push(from.pathname);
  } catch (error) {
    console.error(error);
    return dispatch(reducer.loginSetErrors({ general: { message: error.message } }));
  }
};