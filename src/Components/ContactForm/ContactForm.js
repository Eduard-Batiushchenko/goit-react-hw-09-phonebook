import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContactsOperation } from '../../redux/operations/contactsOperations';
import {
  getAllContacts,
  getTokenValue,
} from '../../redux/selectors/contacts-selectors';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const initialState = {
    name: '',
    number: '',
  };

  const [form, setFrom] = useState({ ...initialState });

  const dispatch = useDispatch();
  const items = useSelector(state => getAllContacts(state));
  const token = useSelector(state => getTokenValue(state));

  const addItems = (item, token) => {
    dispatch(addContactsOperation(item, token));
  };

  const reset = () => {
    setFrom(initialState);
  };

  const handleInput = e => {
    const currentInput = e.currentTarget.name;
    setFrom(state => ({ ...state, [currentInput]: e.target.value }));
  };

  const handleSubmitInput = e => {
    e.preventDefault();
    const result = items.some(
      el => el.name.toLowerCase() === form.name.toLowerCase(),
    );
    !result
      ? addItems(form, token)
      : alert(`${form.name} contact already exist`);

    reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmitInput}>
      <label className={style.label}>
        {' '}
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          value={form.name}
          onChange={handleInput}
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          value={form.number}
          onChange={handleInput}
          required
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
