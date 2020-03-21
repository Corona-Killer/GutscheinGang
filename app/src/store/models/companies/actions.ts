import { AnyAction, Dispatch } from 'redux';
import { Company } from './index';
import * as reducer from './reducer';
import { AxiosResponse } from 'axios';
import api from '../../api';

export const getAllCompanies = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(reducer.getSetLoading());

  try {
    const { data }: AxiosResponse = await api.get('/company');
    const companies = data as Company[];

    return dispatch(reducer.companiesReceived(companies));
  } catch (error) {
    return dispatch(reducer.getSetErrors({ general: { message: error.message } }));
  }
};