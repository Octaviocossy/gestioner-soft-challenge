import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';

import Login from '../components/auth/Login';

const Auth = () => {
  const { isAuthenticated } = useAuth0();
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/list');
    }
  }, [isAuthenticated]);

  return (
    <Stack alignItems={'center'} justifyContent={'center'} minH={'100vh'}>
      <Login />
    </Stack>
  );
};

export default Auth;
