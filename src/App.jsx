import { Container, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

import Header from './components/Header';
import Table from './components/Table';
import { useAppContext } from './context';

const App = () => {
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
      <Header />
      <Table />
    </Container>
  );
};

export default App;
