import React from 'react';
import moment from 'moment';
import Parser from 'html-react-parser';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { Box, Text } from '@chakra-ui/react';
import BlockQuote from 'components/BlockQuote';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const ExerciseInfo = ({ exercise }) => {
  return (
    <>
      <div className="exercise-info">
        <Text fontWeight="700" fontSize="24px">{exercise?.questionName}</Text>
        <Text fontSize="14px" color="#ccc">Cập nhật {moment(exercise?.createdAt).format("DD/MM/YYYY")}</Text>
        <Box mt={8}>
          {exercise?.description && Parser(exercise?.description)}
        </Box>
        <Box mt={8}>
          {
            exercise?.demands && exercise?.demands?.map && (
              <>
                {
                  exercise?.demands.map(el => <BlockQuote key={el} quote={el} />)
                }
              </>
            )
          }
        </Box>
      </div>
    </>
  );
};

export default ExerciseInfo;
