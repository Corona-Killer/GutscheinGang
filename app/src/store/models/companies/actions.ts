import { AnyAction, Dispatch } from 'redux';
import { Company } from './index';
import * as reducer from './reducer';
import { AxiosResponse } from 'axios';
import http from '../../../services/http';
import { mapErrorToReduxError } from '../../../components/util/error';
import { ReduxError } from '../../error';

export const getAllCompanies = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(reducer.getSetLoading());

  try {
    const { data }: AxiosResponse = await http.get('/company');
    const companies = data as Company[];

    return dispatch(reducer.companiesReceived(companies));
  } catch (error) {
    return dispatch(reducer.getSetErrors({ general: { message: error.message } }));
  }
};

export const createCompany = (company: Company) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(reducer.addSetLoading());

  try {
    const { data }: AxiosResponse = await http.post('/company', company);

    return dispatch(reducer.companyCreated(data as Company));
  } catch (error) {
    let errorObject: ReduxError = mapErrorToReduxError(error);
    return dispatch(reducer.addSetErrors(errorObject));
  }
};