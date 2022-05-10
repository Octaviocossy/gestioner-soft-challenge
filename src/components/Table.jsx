import {
  Box,
  Button,
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { useAppContext } from '../context';
import useModal from '../hooks/useModal';

import Row from './Row';

const Table = () => {
  const { state } = useAppContext();
  const [Modal, setData, onOpen, isOpen] = useModal();

  return (
    <Box>
      <Modal />
      <TableContainer>
        <ChakraTable variant="simple">
          <Thead>
            <Tr>
              <Th>Nombre de Buque</Th>
              <Th>Tipo de Carga</Th>
              <Th>Turno</Th>
              <Th>Mas Detalles</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state.tasksFiltered[0] &&
              state.tasksFiltered.map((task) => (
                <Row
                  key={task.id}
                  setData={setData}
                  task={task}
                  onOpen={onOpen}
                />
              ))}
          </Tbody>
        </ChakraTable>
      </TableContainer>
    </Box>
  );
};

export default Table;
