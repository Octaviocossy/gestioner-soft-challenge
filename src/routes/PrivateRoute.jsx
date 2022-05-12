import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = (props) => {
  let location = useLocation();
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated && !isLoading) {
    return <Navigate state={{ from: location }} to="/" />;
  }

  return props.children;
};

export default PrivateRoute;
