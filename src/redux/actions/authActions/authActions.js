import { createAction } from '@reduxjs/toolkit';
import {
  SET_TOKEN_REQUEST,
  SET_TOKEN_SUCCESS,
  SET_TOKEN_ERROR,
  CLEAR_TOKEN_REQUEST,
  CLEAR_TOKEN_SUCCESS,
  CLEAR_TOKEN_ERROR,
} from '../../../constants/constants';

const setTokenRequest = createAction(SET_TOKEN_REQUEST);
const setTokenSuccess = createAction(SET_TOKEN_SUCCESS);
const setTokenError = createAction(SET_TOKEN_ERROR);

const clearTokenRequest = createAction(CLEAR_TOKEN_REQUEST);
const clearTokenSuccess = createAction(CLEAR_TOKEN_SUCCESS);
const clearTokenError = createAction(CLEAR_TOKEN_ERROR);

export {
  setTokenRequest,
  setTokenSuccess,
  setTokenError,
  clearTokenRequest,
  clearTokenSuccess,
  clearTokenError,
};
