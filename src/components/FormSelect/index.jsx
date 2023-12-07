import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';

const FormSelect = ({
  label,
  error,
  value,
  onChange,
  data,
  keyValue,
  keyDisplay,
  element,
  renderElement,
  isRequired = false,
  placeholder,
  disabled = false,
  maxW,
  isPlaceholder = true,
  styles = { textTransform: 'capitalize' }
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error} maxW={maxW ? maxW : '375px'} minW={'80px'}>
      {label && <FormLabel>{label}</FormLabel>}
      {isPlaceholder ? (
        <Select
          placeholder={placeholder || 'Select option'}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={styles}
        >
          {data.map((item) => (
            <option value={item[keyValue]} key={item[keyValue]} style={styles}>
              {item[keyDisplay]}
            </option>
          ))}
        </Select>
      ) : (
        <Select
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={{ textTransform: 'capitalize' }}
        >
          {data.map((item) => (
            <option
              value={item[keyValue]}
              key={item[keyValue]}
              style={{ textTransform: 'capitalize' }}
            >
              {item[keyDisplay]}
            </option>
          ))}
        </Select>
      )}

      <FormErrorMessage color="primary.500">{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormSelect;
