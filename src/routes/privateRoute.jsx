import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { Header } from '../components/Header';

export function PrivateRoute({ component, isAdmin = false }) {
  const user = localStorage.getItem('devburger:userData');

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {!isAdmin && <Header />}
      {component}
    </>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool,
};
