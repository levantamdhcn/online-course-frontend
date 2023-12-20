import React from 'react';
import { Box, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import BlockPre from 'components/BlockPre';

const getInput = (message) => {
  if (message) {
    let strs = message.split(';');
    return strs[0];
  }
};

const getYourAnswer = (message) => {
  if (message) {
    let strs = message.split(';');
    return strs[1];
  }
};

const getExpectedAnswer = (message) => {
  if (message) {
    let strs = message.split(';');
    return strs[2];
  }
};

const ResultPanel = ({ resultMessage }) => {
  const data = React.useMemo(() => {
    const success = resultMessage?.status === 'pass';
    const input = getInput(resultMessage.message);
    let output = getYourAnswer(resultMessage.message);
    if(resultMessage?.status !== 'pass' && resultMessage?.status !== 'fail') {
      output = resultMessage.message;
    }
    const expectedOutput = getExpectedAnswer(resultMessage.message);

    return {
      success,
      input,
      output,
      expectedOutput
    };
  }, [resultMessage]);

  return (
    <SimpleGrid sx={styles.root}>
      <Stack>
        {data?.success ? (
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

        {!data.success && (
          <Box padding="10px 10px 0 10px">
            <BlockPre label="Dữ liệu đầu vào" value={data?.input} />
            <HStack mt={5} gap="30px">
              <BlockPre label="Kết quả của bạn" value={data?.output} />
              <BlockPre label="Kết quả mong đợi" value={data?.expectedOutput} />
            </HStack>
            <HStack mt={3} gap="30px">
              <BlockPre
                label="Thời gian thực thi thực tế"
                value={resultMessage?.newSubmission?.runtime}
              />
              <BlockPre label="Thời gian thực thi tối đa" value={500} />
            </HStack>
          </Box>
        )}
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
