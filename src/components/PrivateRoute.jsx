import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
  isLoading,
  redirectTo = '/',
  component: Component,
}) => {
  const token = useSelector(selectToken);
  const shouldRedirect = !token && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string,
  component: PropTypes.object.isRequired,
};
