import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContactsOperation,
  deleteContactOperation,
} from '../../redux/operations/contactsOperations';
import {
  getFilteredItems,
  getTokenValue,
} from '../../redux/selectors/contacts-selectors';
import style from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => getTokenValue(state));
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(getContactsOperation(token));
  }, []);

  const deleteContact = (id, token) => {
    dispatch(deleteContactOperation(id, token));
  };

  const filteredContacts = getFilteredItems(state);
  return (
    <ul className={style.list}>
      {filteredContacts.map(el => {
        return (
          <li key={el.id} className={style.item}>
            {el.name}: {el.number}
            <button
              type="button"
              className={style.button}
              onClick={() => deleteContact(el.id, token)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
