import { useAuth0 } from '@auth0/auth0-react';
import { Button, Spinner } from '@chakra-ui/react';

const Login = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <Button
      colorScheme={'orange'}
      leftIcon={isLoading && <Spinner />}
      variant={'outline'}
      w={'7rem'}
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default Login;
