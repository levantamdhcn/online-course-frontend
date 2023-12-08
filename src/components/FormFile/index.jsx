import {
  Image,
  FormControl,
  FormErrorMessage,
  Text,
  FormLabel,
  Input,
  Flex,
  Link
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import ImagePlaceholderIcon from '../../assets/images/text-file-placeholder.svg';

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
      <Link
        href="https://drive.google.com/file/d/1okWdXz31k3C5sqV6q4H6mgeVtB1r6iua/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#00BFFE"}}
      >
        Tải tệp tin mẫu
      </Link>
      <Input
        ref={ref}
        type="file"
        accept=".txt"
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
        <Image width={35} src={ImagePlaceholderIcon} mb="16px" />
        <Text color="neutral.900" mb="4px">
          <Text as="span" color="primary.500">
            Tải lên 1 tệp tin
          </Text>{' '}
          hoặc kéo thả vào ô này
        </Text>
        <Text>{'Tệp tin .txt dung lượng tối đa 5MB'}</Text>
        <Text></Text>
      </Flex>
      <FormErrorMessage color="primary.500">{error?.message}</FormErrorMessage>
    </FormControl>
  );
});

export default FormFile;
