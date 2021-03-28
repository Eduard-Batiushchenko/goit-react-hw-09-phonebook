import { createAction } from '@reduxjs/toolkit';
import {
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_EROOR,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
} from '../../../constants/constants';

const addItemRequest = createAction(ADD_ITEM_REQUEST);
const addItemSuccess = createAction(ADD_ITEM_SUCCESS);
const addItemError = createAction(ADD_ITEM_ERROR);

const setByReloadRequest = createAction(GET_CONTACTS_REQUEST);
const setByReloadSuccess = createAction(GET_CONTACTS_SUCCESS);
const setByReloadError = createAction(GET_CONTACTS_EROOR);

const deleteItemRequest = createAction(DELETE_ITEM_REQUEST);
const deleteItemSuccess = createAction(DELETE_ITEM_SUCCESS);
const deleteItemError = createAction(DELETE_ITEM_ERROR);

export {
  addItemRequest,
  addItemSuccess,
  addItemError,
  setByReloadRequest,
  setByReloadSuccess,
  setByReloadError,
  deleteItemRequest,
  deleteItemSuccess,
  deleteItemError,
};

// const addItem = data => ({
//   type: ADD_ITEM,
//   payload: {
//     ...data,
//     id: shortid.generate(),
//   },
// });

// const deleteItem = id => ({
//   type: DELETE_ITEM,
//   payload: id,
// });

// const setByReload = value => ({
//   type: RELOAD_PAGE,
//   payload: value,
// });
