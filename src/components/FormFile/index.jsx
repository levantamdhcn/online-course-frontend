import {
  Image,
  FormControl,
  FormErrorMessage,
  Text,
  FormLabel,
  Input,
  Flex
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import ImagePlaceholderIcon from '../../assets/image-placeholder.svg';


const FormFile = forwardRef((props, ref) => {
  const {
    label,
    error,
    onChange,
    renderElement,
    element,
    disabled,
    maxW,
    isMultiple = true,
    acceptVideo = false,
    ...inputProps
  } = props;
  return (
    <FormControl isInvalid={!!error} isDisabled={disabled} maxW={maxW ? maxW : '375px'}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        ref={ref}
        type="file"
        accept={`image/png,image/jpg,image/jpeg, ${acceptVideo ? 'video/*' : ''}`}
        onChange={onChange}
        {...inputProps}
        display="none"
        multiple={isMultiple}
      />
      <Flex
        flexDir="column"
        borderRadius="6px"
        border="1px solid"
        borderColor="neutral.200"
        boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
        p="16px"
        alignItems="center"
        cursor="pointer"
        onClick={() => ref.current.click()}
      >
        <Image src={ImagePlaceholderIcon} mb="16px" />
        <Text color="neutral.900" mb="4px">
          <Text as="span" color="primary.500">
            Upload a file
          </Text>{' '}
          or drag and drop
        </Text>
        <Text>{acceptVideo ? 'Image or Video upto 5MB' : 'PNG & JPG upto 5MB'}</Text>
      </Flex>
      <FormErrorMessage color="primary.500">{error?.message}</FormErrorMessage>
    </FormControl>
  );
});

export default FormFile;
