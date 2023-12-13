import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ChartSection = ({ title, children }) => {
  return (
    <Box style={styles.wrapper}>
      <Flex padding="24px 30px 0 30px">
        <Text fontSize="18px" color="#303927">{title}</Text>
      </Flex>
      <Box padding="8px 8px 0 8px" height="100%">
        {children}
      </Box>
    </Box>
  );
};

export default ChartSection;

const styles = {
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    width: '100%',
    minHeight: '376px'
  },
};
