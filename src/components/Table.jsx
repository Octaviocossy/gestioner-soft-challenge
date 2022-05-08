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

const Table = () => {
  const { state } = useAppContext();

  return (
    <Box>
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
              state.tasksFiltered.map((task) => {
                return (
                  <>
                    <Tr>
                      <Td>{task.Tarea.Nombre}</Td>
                      <Td>{task.Tarea.TipoCargaDescripcion}</Td>
                      <Td>{task.Descripcion}</Td>
                      <Td>
                        <Button>Detalles</Button>
                      </Td>
                    </Tr>
                  </>
                );
              })}
          </Tbody>
        </ChakraTable>
      </TableContainer>
    </Box>
  );
};

export default Table;
