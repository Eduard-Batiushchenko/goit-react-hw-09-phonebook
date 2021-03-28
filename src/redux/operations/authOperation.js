import axios from 'axios';
import {
  setTokenRequest,
  setTokenSuccess,
  setTokenError,
  clearTokenRequest,
  clearTokenSuccess,
  clearTokenError,
} from '../actions/authActions/authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const options = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const registrationOperation = userData => async dispatch => {
  try {
    dispatch(setTokenRequest());
    const result = await axios.post('/users/signup', userData);
    dispatch(setTokenSuccess(result.data.token));
  } catch (error) {
    dispatch(setTokenError());
  }
};

const loginOperation = userData => async dispatch => {
  try {
    dispatch(setTokenRequest());
    const result = await axios.post('/users/login', userData);
    dispatch(setTokenSuccess(result.data.token));
  } catch (error) {
    dispatch(setTokenError());
  }
};

const logoutOperation = token => async dispatch => {
  try {
    dispatch(clearTokenRequest());
    await axios.post('/users/logout', null, options(token));
    dispatch(clearTokenSuccess());
  } catch (error) {
    dispatch(clearTokenError());
  }
};

export { registrationOperation, loginOperation, logoutOperation };
