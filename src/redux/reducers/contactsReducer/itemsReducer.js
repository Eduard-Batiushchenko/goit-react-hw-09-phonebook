import {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_EROOR,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
} from '../../../constants/constants';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [];

const itemsReducer = createReducer(initialState, {
  [ADD_ITEM_SUCCESS]: (state, { payload }) =>
    state.some(el => el.name === payload.name)
      ? state
      : (state = [...state, payload]),
  [ADD_ITEM_ERROR]: () => alert('Oops....Something went wrong, pls try again'),
  [DELETE_ITEM_SUCCESS]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
  [DELETE_ITEM_ERROR]: () =>
    alert('Oops....Something went wrong, pls try again'),
  [GET_CONTACTS_SUCCESS]: (state, { payload }) => (state = payload),
  [GET_CONTACTS_EROOR]: () =>
    alert('Oops....Something went wrong, pls try again'),
});

export default itemsReducer;
