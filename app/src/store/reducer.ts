import { combineReducers } from 'redux';
import companiesReducer from './models/companies/reducer';
import sectorsReducer from './models/sectors/reducer';

export default combineReducers({
  companies: companiesReducer,
  sectors: sectorsReducer
});