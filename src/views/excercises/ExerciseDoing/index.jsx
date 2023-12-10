import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from './Editor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCases from './TestCase';
import axios from 'axios';
import config from '../../../config';
import useAuth from 'hooks/useAuth';
import { useFetchExercise } from 'views/admin/Exercise/hooks/useQuery';
import LoadingScreen from 'components/LoadingScreen';
import { useRunSubmission } from '../hooks/useQuery';

const ExerciseDoing = () => {
  const { user } = useAuth();
  const { exerciseId } = useParams();
  const [resultMessage, setResultMessage] = useState({
    message: '',
    runtime: 0,
    runtimeLimit: 500,
    status: 'fail',
  });
  const [currentCode, setCurrentCode] = useState('');

  const { isLoading, data: exercise, refetch } = useFetchExercise(exerciseId);

  const { mutate, isLoading: running } = useRunSubmission((resp) => {
    setResultMessage({
      message: resp?.message,
      status: resp?.status,
      runtime: resp?.newSubmission?.runtime,
    })
  });

  console.log('resultMessage', resultMessage);

  useEffect(() => {
    setCurrentCode(exercise?.mainFunction);
  }, [exercise]);

  const handleRunTest = async () => {
    //   {
    //     "_id": "656769b0d17deae11ace1d10",
    //     "user": "628671cc61c0aa3ddff1907f",
    //     "exercise": "64da5cf19e21569da75cba19",
    //     "language": "javascript",
    //     "solution": "var reverseString = function(s) {\n  if (!s) {\n    return \"\";\n  }\n  answer = \"\";\n  for (i = s.length - 1; i >= 0; i--) {\n    answer = answer.concat(s[i]);\n  }\n  return answer;\n};"
    // }
    try {
      const data = {};
      data.user = user._id;
      data.exercise = exercise._id;
      data.language = 'javascript';
      data.solution = currentCode;
      
      mutate(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading | running) return <LoadingScreen />;

  return (
    <>
      <Splitter direction={SplitDirection.Vertical} minHeights={[100, 100]}>
        <Editor currentCode={currentCode} setCurrentCode={setCurrentCode} />
        <TestCases handleRunTest={handleRunTest} />
      </Splitter>
    </>
  );
};

export default ExerciseDoing;
