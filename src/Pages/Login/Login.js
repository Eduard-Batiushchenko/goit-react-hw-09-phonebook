import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginOperation } from '../../redux/operations/authOperation';
import route from '../../rotes/routes';
import style from './Login.module.css';
import { getTokenValue } from '../../redux/selectors/contacts-selectors';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const token = useSelector(state => getTokenValue(state));
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ ...initialState });

  useEffect(() => {
    token ? history.push(route.contacts) : history.push(route.login);
  }, []);

  useEffect(() => {
    token ? history.push(route.contacts) : history.push(route.login);
  }, [token]);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm(state => ({ ...state, [name]: value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginOperation(form));
    setForm(initialState);
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Sign in</h1>
      <form className={style.from} onSubmit={onSubmit}>
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
        If you are not registered{' '}
        <NavLink to={route.registration} className={style.link}>
          {' '}
          Registrate
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
