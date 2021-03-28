import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutOperation } from '../../redux/operations/authOperation';
import routes from '../../rotes/routes';
import route from '../../rotes/routes';
import style from './Header.module.css';
import { getTokenValue } from '../../redux/selectors/contacts-selectors';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(state => getTokenValue(state));

  useEffect(() => {
    token ? history.push(route.contacts) : history.push(route.home);
  }, []);

  const logOut = token => {
    dispatch(logoutOperation(token));
  };

  return (
    <header className={style.header}>
      <ul className={style.list}>
        {!token ? (
          <li className={style.item}>
            <NavLink
              exact
              to={route.home}
              className={style.link}
              activeClassName={style.selected}
            >
              Home
            </NavLink>
          </li>
        ) : (
          <li className={style.item}>
            <NavLink
              to={route.contacts}
              className={style.link}
              activeClassName={style.selected}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
      {token ? (
        <button
          type="button"
          className={style.button}
          onClick={() => logOut(token)}
        >
          Log out
        </button>
      ) : (
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink
              to={routes.registration}
              className={style.link}
              activeClassName={style.selected}
            >
              Registration
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              to={route.login}
              className={style.link}
              activeClassName={style.selected}
            >
              Log In
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
