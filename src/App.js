import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import route from './rotes/routes';

import Home from './Pages/Home/Home';
import ContactsPage from './Pages/Contacts/ContactsPage';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import PrivateRoute from './Pages/PrivateRoute';

const App = () => {
  const token = useSelector(state => state.token);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={route.home} component={Home} />
        <PrivateRoute
          path={route.contacts}
          component={ContactsPage}
          token={token}
        />
        <Route path={route.login} component={Login} />
        <Route path={route.registration} component={Registration} />
        <Redirect to={route.home} />
      </Switch>
    </>
  );
};

export default App;
