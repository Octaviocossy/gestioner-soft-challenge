import { ListItem } from '@chakra-ui/react';
import React from 'react';

const Li = ({ text, border }) => {
  return (
    <ListItem
      borderBottom={border ? '1px' : '0px'}
      borderColor={'gray.200'}
      listStyleType={'none'}
      py={'1rem'}
    >
      {text}
    </ListItem>
  );
};

export default Li;
