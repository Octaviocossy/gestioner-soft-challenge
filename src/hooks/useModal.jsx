import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  TableContainer,
  Thead,
  useDisclosure,
  Tr,
  Th,
  Tbody,
  Table as ChakraTable,
  Td,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const useModal = () => {
  const [data, setData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Component = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'45rem'}>
          <ModalHeader>
            Detalles - Buque{' '}
            <Text as={'span'} color={'orange.500'}>
              #{data?.Tarea.Buque.Id}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                  <Tr>
                    <Td>Test</Td>
                    <Td>Test</Td>
                    <Td>Test</Td>
                    <Td>Test</Td>
                  </Tr>
                </Tbody>
              </ChakraTable>
            </TableContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  return [Component, setData, onOpen, isOpen];
};

export default useModal;
