import { createReducer } from '@reduxjs/toolkit';
import {
  SET_TOKEN_SUCCESS,
  SET_TOKEN_ERROR,
  CLEAR_TOKEN_SUCCESS,
  CLEAR_TOKEN_ERROR,
} from '../../../constants/constants';
const initialState = null;

const authReducer = createReducer(initialState, {
  [SET_TOKEN_SUCCESS]: (_, { payload }) => payload,
  [SET_TOKEN_ERROR]: () => alert('Oops....Something went wrong, pls try again'),
  [CLEAR_TOKEN_SUCCESS]: () => initialState,
  [CLEAR_TOKEN_ERROR]: () =>
    alert('Oops....Something went wrong, pls try again'),
});

export default authReducer;
