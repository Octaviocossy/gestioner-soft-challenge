import { Container } from '@chakra-ui/react';
import { useEffect } from 'react';

import Header from './components/Header';
import Table from './components/Table';
import { useAppContext } from './context';

const App = () => {
  const { state, actions } = useAppContext();

  useEffect(() => {
    actions.getData();
  }, []);

  useEffect(() => {
    actions.getTasksParameters();
  }, [state.tasks]);

  return (
    <Container maxW={'container.lg'}>
      <Header />
      <Table />
    </Container>
  );
};

export default App;
