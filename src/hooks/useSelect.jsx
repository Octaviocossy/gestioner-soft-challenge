import { Select } from '@chakra-ui/react';

const useSelect = () => {
  const Component = ({ handleChange, state, name, value }) => {
    return (
      <Select name={name} value={value} onChange={handleChange}>
        <option>-</option>
        {state.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
    );
  };

  return [Component];
};

export default useSelect;
