import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import React from "react";


const FormInput = ({
  label,
  error,
  value,
  onChange,
  renderElement,
  element,
  disabled,
  maxW,
  isRequired,
  ...inputProps
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error} isDisabled={disabled} maxW={maxW ? maxW : "375px"} minW={'60px'}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      <FormErrorMessage color="primary.500">{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
