import { combineReducers } from 'redux';
import authReducer from './models/auth/reducer';
import companiesReducer from './models/companies/reducer';
import sectorsReducer from './models/sectors/reducer';

export default combineReducers({
  auth: authReducer,
  companies: companiesReducer,
  sectors: sectorsReducer,
});