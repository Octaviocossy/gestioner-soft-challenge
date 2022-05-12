import { useAuth0 } from '@auth0/auth0-react';
import { Text, HStack, Img, Box, Button } from '@chakra-ui/react';

import Logout from './auth/Logout';

const UserBar = () => {
  const { user } = useAuth0();

  return (
    <HStack mt={'2rem'}>
      <HStack flex={1}>
        <Img
          borderRadius={'full'}
          maxW={'4rem'}
          mr={'0.5rem'}
          src={user?.picture}
        />
        <Text display={{ md: 'block', base: 'none' }}>{user?.name}</Text>
      </HStack>
      <Logout />
    </HStack>
  );
};

export default UserBar;
