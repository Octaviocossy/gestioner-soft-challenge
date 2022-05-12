import { Box, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppContext } from '../context';
import Select from '../ui/Select';

const Filters = () => {
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
      flexDirection={{ md: 'row', base: 'column' }}
      justifyContent={'space-between'}
      py={'2rem'}
    >
      <Box marginTop={{ md: '0', base: '1.5rem' }} w={'100%'}>
        <Text>Nombre de buque: </Text>
        <Select
          handleChange={handleChange}
          name={'nombre'}
          state={state.tasksparameters.nombres}
          value={savevalue.nombre}
        />
      </Box>
      <Box
        marginLeft={{ md: '0.5rem', base: '0' }}
        marginTop={{ md: '0', base: '1.5rem' }}
        w={'100%'}
      >
        <Text>Tipo de carga: </Text>
        <Select
          handleChange={handleChange}
          name={'tipoCarga'}
          state={state.tasksparameters.tipoCarga}
          value={savevalue.tipoCarga}
        />
      </Box>
      <Box
        marginLeft={{ md: '0.5rem', base: '0' }}
        marginTop={{ md: '0', base: '1.5rem' }}
        w={'100%'}
      >
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
        marginLeft={{ md: '0.5rem', base: '0' }}
        marginTop={'1.5rem'}
        w={{ md: '25rem', base: 'auto' }}
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

export default Filters;
