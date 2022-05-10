import { Select as ChakraSelect } from '@chakra-ui/react';

const Select = ({ handleChange, state, name, value }) => {
  return (
    <ChakraSelect name={name} value={value} onChange={handleChange}>
      <option>-</option>
      {state.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </ChakraSelect>
  );
};

export default Select;
