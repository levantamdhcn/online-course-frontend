import React, { useRef } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import Editor from '@monaco-editor/react';

const FormScript = ({ className, theme, isRequired = false, label, error, value, height, onChange, placeholder, disabled, maxW }) => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor;
  }
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error} isDisabled={disabled} maxW={maxW ? maxW : '375px'}>
      {label && <FormLabel>{label}</FormLabel>}
      <Editor
        value={value}
        height={height}
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        className={className ? className : 'editor-container'}
        onChange={onChange}
        theme={theme}
      />
      <FormErrorMessage color="primary.500">{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormScript;
