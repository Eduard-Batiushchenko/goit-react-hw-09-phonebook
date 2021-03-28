import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registrationOperation } from '../../redux/operations/authOperation';
import route from '../../rotes/routes';
import style from './Registration.module.css';
import { getTokenValue } from '../../redux/selectors/contacts-selectors';

const Registration = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const token = useSelector(state => getTokenValue(state));
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    token ? history.push(route.contacts) : history.push(route.registration);
  }, []);

  useEffect(() => {
    token ? history.push(route.contacts) : history.push(route.registration);
  }, [token]);

  const [form, setForm] = useState({ ...initialState });

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm(state => ({ ...state, [name]: value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(registrationOperation(form));
    setForm(initialState);
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Registration</h1>
      <form className={style.from} onSubmit={onSubmit}>
        <label className={style.label}>
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={inputHandler}
            required
          />
        </label>
        <label className={style.label}>
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={inputHandler}
            required
          />
        </label>
        <label className={style.label}>
          <input
            className={style.input}
            type="password"
            name="password"
            value={form.password}
            placeholder="Your password"
            onChange={inputHandler}
            required
          />
        </label>
        <button type="submit" className={style.button}>
          Sign up
        </button>
      </form>
      <p>
        If you are registered user{' '}
        <NavLink to={route.login} className={style.link}>
          {' '}
          Sign In
        </NavLink>
      </p>
    </div>
  );
};

export default Registration;
