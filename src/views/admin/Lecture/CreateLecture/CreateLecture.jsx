import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { CreateLectureForm } from '.';

export const CreateLecture = () => {
  return (
    <Box>
        <Heading>
            Thêm mới bài tập
        </Heading>
      <CreateLectureForm />
    </Box>
  );
};
