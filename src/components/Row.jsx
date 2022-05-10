import { Button, Td, Tr } from '@chakra-ui/react';

import { useAppContext } from '../context';
import useModal from '../hooks/useModal';

const Row = ({ task, setData, onOpen }) => {
  const { actions } = useAppContext();

  const handleOpen = () => {
    onOpen();
    setData(task);
  };

  return (
    <>
      <Tr>
        <Td>{actions.textFormatter(task.Tarea.Nombre)}</Td>
        <Td>{actions.textFormatter(task.Tarea.TipoCargaDescripcion)}</Td>
        <Td>{actions.textFormatter(task.Descripcion)}</Td>
        <Td>
          <Button colorScheme={'orange'} onClick={handleOpen}>
            Detalles
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default Row;
