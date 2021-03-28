import React from 'react';
import { useDispatch } from 'react-redux';
import { handleFilterValue } from '../../redux/actions/contactsActions/filterActions';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = value => dispatch(handleFilterValue(value));
  return (
    <label className={style.label}>
      Find contacts by name{' '}
      <input
        className={style.input}
        type="text"
        name="filter"
        onChange={e => {
          handleFilterInput(e.currentTarget.value);
        }}
      />
    </label>
  );
};

export default Filter;
