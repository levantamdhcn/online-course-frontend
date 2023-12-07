import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import React from 'react';
import ReactQuill from 'react-quill';

const FormRichText = ({
  label,
  error,
  value,
  height,
  onChange,
  placeholder,
  disabled,
  isRequired,
  maxW
}) => {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error} isDisabled={disabled} maxW={maxW ? maxW : '375px'}>
      {label && <FormLabel>{label}</FormLabel>}
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        modules={modules}
      />
      <FormErrorMessage color="primary.500">{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormRichText;
