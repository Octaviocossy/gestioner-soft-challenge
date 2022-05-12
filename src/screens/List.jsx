import { Container, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

import Filters from '../components/Filters';
import { useAppContext } from '../context';
import Table from '../components/Table';
import UserBar from '../components/UserBar';

const List = () => {
  const { state, actions } = useAppContext();
  const alert = useToast();

  useEffect(() => {
    actions.getData();
  }, []);

  useEffect(() => {
    actions.getTasksParameters();
  }, [state.tasks]);

  useEffect(() => {
    if (state.enablealerts) {
      if (state.tasksfiltered.length === 0) {
        alert({
          title: 'Ninguna búsqueda coincidente.',
          status: 'warning',
          variant: 'left-accent',
          isClosable: true,
        });
      }
    }
  }, [state.tasksfiltered]);

  return (
    <Container maxW={'container.lg'}>
      <UserBar />
      <Filters />
      <Table />
    </Container>
  );
};

export default List;
