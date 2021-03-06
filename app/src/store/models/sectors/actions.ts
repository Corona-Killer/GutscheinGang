import { AnyAction, Dispatch } from 'redux';
import { Sector } from './index';
import * as reducer from './reducer';
import { AxiosResponse } from 'axios';
import api from '../../api';

/**
 * Get al sectors
 */
export const getSectors = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(reducer.getSetLoading());

  try {
    const { data }: AxiosResponse = await api.get('/sector');
    const sectors = data as Sector[];

    return dispatch(reducer.sectorsReceived(sectors));
  } catch (error) {
    return dispatch(reducer.getSetErrors({ general: { message: error.message } }));
  }
};