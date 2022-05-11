import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useState } from 'react';

import Li from '../ui/Li';

const useModal = () => {
  const [data, setData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Component = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'30rem'}>
          <ModalHeader paddingBottom={0}>
            Detalles - Buque{' '}
            <Text as={'span'} color={'orange.500'}>
              #{data?.Tarea.Buque.Id}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UnorderedList m={0}>
              <Li
                border={true}
                text={`Fecha de salida: ${data?.FechaInicio.slice(
                  0,
                  10
                ).replaceAll('-', ' / ')}`}
              />
              <Li
                border={true}
                text={`Hora de salida: ${data?.FechaInicio.slice(11)}`}
              />
              <Li
                border={true}
                text={` Fecha de llegada:
                ${data?.FechaFin.slice(0, 10).replaceAll('-', ' / ')}`}
              />
              <Li
                border={true}
                text={`Hora de llegada: ${data?.FechaFin.slice(11)}`}
              />
              <Li
                border={true}
                text={`Numero de operativo: #${data?.Tarea.NumeroOperativo}`}
              />
              <Li
                border={true}
                text={`Ubicacion salida: ${data?.Tarea.Ubicacion1Nombre}`}
              />
              <Li
                border={true}
                text={`Ubicacion llegada: ${data?.Tarea.Ubicacion2Nombre}`}
              />
              <Li
                border={false}
                text={`Id operario: #${data?.TareaTurnoOperarioId}`}
              />
            </UnorderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  return [Component, setData, onOpen, isOpen];
};

export default useModal;
