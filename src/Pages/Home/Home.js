import React from 'react';
import { NavLink } from 'react-router-dom';
import route from '../../rotes/routes';
import style from './Home.module.css';

const Home = () => {
  return (
    <h1 className={style.title}>
      To use this APP you need to{' '}
      <NavLink
        to={route.login}
        className={style.link}
        activeClassName={style.selected}
      >
        Log In
      </NavLink>{' '}
      /{' '}
      <NavLink
        to={route.registration}
        className={style.link}
        activeClassName={style.selected}
      >
        Registrate
      </NavLink>{' '}
      a new account!
    </h1>
  );
};

export default Home;
