import { Box, HStack, Select, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppContext } from '../context';

const Header = () => {
  const { state, actions } = useAppContext();
  const [savevalue, setSaveValue] = useState({
    nombre: '-',
    tipoCarga: '-',
    turno: '-',
  });

  const handleChange = (e) => {
    setSaveValue({
      ...savevalue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    actions.saveUserParameters(savevalue);
  }, [savevalue]);

  return (
    <HStack py={'2rem'}>
      <Box w={'100%'}>
        <Text>Nombre de buque: </Text>
        <Select name={'nombre'} onChange={handleChange}>
          <option>-</option>
          {state.tasksparameters.nombres.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </Box>
      <Box w={'100%'}>
        <Text>Tipo de carga: </Text>
        <Select maxW={'20rem'} name={'tipoCarga'} onChange={handleChange}>
          <option>-</option>
          {state.tasksparameters.tipoCarga.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </Box>
      <Box w={'100%'}>
        <Text>Turno: </Text>
        <Select maxW={'20rem'} name={'turno'} onChange={handleChange}>
          <option>-</option>
          {state.tasksparameters.turno.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </Box>
    </HStack>
  );
};

export default Header;
