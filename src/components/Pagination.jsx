import { IconButton, HStack, Text } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import { useAppContext } from '../context';

const Pagination = () => {
  const { state, actions } = useAppContext();

  return (
    <HStack alignSelf={'center'} mt={'2rem'} spacing={5}>
      <IconButton
        icon={<ArrowBackIcon />}
        variant={'outline'}
        onClick={actions.handlePreviousPage}
      />
      <Text>{state.currentpage + 1}</Text>
      <IconButton
        icon={<ArrowForwardIcon />}
        variant={'outline'}
        onClick={actions.handleNextPage}
      />
    </HStack>
  );
};

export default Pagination;
