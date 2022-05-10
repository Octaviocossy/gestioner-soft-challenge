import { Box, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppContext } from '../context';
import Select from '../ui/Select';

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
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      py={'2rem'}
    >
      <Box w={'100%'}>
        <Text>Nombre de buque: </Text>
        <Select
          handleChange={handleChange}
          name={'nombre'}
          state={state.tasksparameters.nombres}
          value={savevalue.nombre}
        />
      </Box>
      <Box marginLeft={'0.5rem'} w={'100%'}>
        <Text>Tipo de carga: </Text>
        <Select
          handleChange={handleChange}
          name={'tipoCarga'}
          state={state.tasksparameters.tipoCarga}
          value={savevalue.tipoCarga}
        />
      </Box>
      <Box marginLeft={'0.5rem'} w={'100%'}>
        <Text>Turno: </Text>
        <Select
          handleChange={handleChange}
          name={'turno'}
          state={state.tasksparameters.turno}
          value={savevalue.turno}
        />
      </Box>
      <Button
        colorScheme={'orange'}
        marginLeft={'0.5rem'}
        marginTop={'1.5rem'}
        w={'25rem'}
        onClick={() =>
          setSaveValue({
            nombre: '-',
            tipoCarga: '-',
            turno: '-',
          })
        }
      >
        Reset Filtros
      </Button>
    </Box>
  );
};

export default Header;
