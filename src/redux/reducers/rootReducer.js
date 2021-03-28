import { combineReducers } from 'redux';
import contacts from './contactsReducer/index';
import token from './authReducer/authReducer';

const rootReducer = combineReducers({
  contacts,
  token,
});

export default rootReducer;
