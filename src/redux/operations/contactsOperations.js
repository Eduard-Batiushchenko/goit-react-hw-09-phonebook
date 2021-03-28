import axios from 'axios';
import {
  addItemRequest,
  addItemSuccess,
  addItemError,
  setByReloadRequest,
  setByReloadSuccess,
  setByReloadError,
  deleteItemRequest,
  deleteItemSuccess,
  deleteItemError,
} from '../actions/contactsActions/itemsActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const options = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const addContactsOperation = (item, token) => dispatch => {
  dispatch(addItemRequest());
  axios
    .post('/contacts', item, options(token))
    .then(({ data }) => dispatch(addItemSuccess(data)))
    .catch(() => dispatch(addItemError()));
};

const getContactsOperation = token => async dispatch => {
  try {
    dispatch(setByReloadRequest());
    const result = await axios.get('/contacts', options(token));
    dispatch(setByReloadSuccess(result.data));
  } catch (error) {
    dispatch(setByReloadError());
  }
};
const deleteContactOperation = (id, token) => dispatch => {
  dispatch(deleteItemRequest());
  axios
    .delete(`/contacts/${id}`, options(token))
    .then(() => dispatch(deleteItemSuccess(id)))
    .catch(() => dispatch(deleteItemError()));
};

export { getContactsOperation, addContactsOperation, deleteContactOperation };
