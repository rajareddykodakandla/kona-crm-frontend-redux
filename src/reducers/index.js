import { combineReducers } from 'redux';
import userReducer from './user'
import leadsReducer from './leads'

const rootReducer = combineReducers({
  isUserLoggedIn:userReducer,
  leads:leadsReducer,
  leadCreated:leadsReducer
});

export default rootReducer;
