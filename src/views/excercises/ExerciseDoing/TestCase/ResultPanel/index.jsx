import React from 'react';
import { Box, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import BlockPre from 'components/BlockPre';

const ResultPanel = ({ success, input, output, expectedOutput, executeTime, limitExecuteTime }) => {
  return (
    <SimpleGrid sx={styles.root}>
      <Stack>
        {success ? (
          <Box borderBottom="1px solid #fff" padding="10px">
            <Text color="success.500" fontWeight="700">
              Kết quả: Thành công
            </Text>
            <Text color="success.500">Câu trả lời của bạn đã vượt qua tất cả các test cases!</Text>
          </Box>
        ) : (
          <Box borderBottom="1px solid #fff" padding="10px">
            <Text color="error.500" fontWeight="700">
              Kết quả: Thất bại!
            </Text>
          </Box>
        )}

        <Box padding="10px 10px 0 10px">
          <BlockPre label="Dữ liệu đầu vào" value={input} />
          <HStack mt={5} gap="30px">
            <BlockPre label="Kết quả của bạn" value={output} />
            <BlockPre label="Kết quả mong đợi" value={expectedOutput} />
          </HStack>
          <HStack mt={3} gap="30px">
            <BlockPre label="Thời gian thực thi thực tế" value={executeTime} />
            <BlockPre label="Thời gian thực thi tối đa" value={limitExecuteTime} />
          </HStack>
        </Box>
      </Stack>
    </SimpleGrid>
  );
};

export default ResultPanel;

const styles = {
  root: {
    width: '100%',
    backgroundColor: '#232432'
  }
};
