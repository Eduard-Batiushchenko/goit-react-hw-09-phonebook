import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={props => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
