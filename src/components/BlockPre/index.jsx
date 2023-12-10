import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const BlockPre = ({ label, value }) => {
  return (
    <Box width="100%">
      <Heading as="h5" fontSize="14px" color="#fff" mb={1}>{label}</Heading>
      <pre style={styles.pre}>{value}</pre>
    </Box>
  );
};

export default BlockPre;

const styles = {
  pre: {
    display: 'block',
    padding: '9.5px',
    margin: '0 0 10px',
    fontSize: '14px',
    lineHeight: 1.42857143,
    color: '#333',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    backgroundColor: '#c5c5c5',
    border: '1px solid #ccc',
    borderRadius: '4px'
  }
};
