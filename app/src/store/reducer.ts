import { combineReducers } from 'redux';
import sectorsReducer from './models/sectors/reducer';

export default combineReducers({
  sectors: sectorsReducer
});