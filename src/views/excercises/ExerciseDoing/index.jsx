import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from './Editor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCases from './TestCase';
import useAuth from 'hooks/useAuth';
import { useFetchExercise } from 'views/admin/Exercise/hooks/useQuery';
import LoadingScreen from 'components/LoadingScreen';
import { useFetchLatestSubmission, useRunSubmission } from '../hooks/useQuery';

const ExerciseDoing = () => {
  const { user } = useAuth();
  const { exerciseId } = useParams();
  const [resultMessage, setResultMessage] = useState();
  const [currentCode, setCurrentCode] = useState('');

  const { isLoading, data: exercise } = useFetchExercise(exerciseId);

  const { isLoading: loadSubmission, data: submission } = useFetchLatestSubmission(exerciseId);


  const { mutate, isLoading: running } = useRunSubmission((resp) => {
    setResultMessage({
      message: resp?.message,
      status: resp?.status,
      runtime: resp?.newSubmission?.runtime,
    })
  });

  useEffect(() => {
    setCurrentCode(submission?.mainFunction);
  }, [submission]);

  const handleRunTest = async () => {
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

  if (isLoading || loadSubmission) return <LoadingScreen />;

  return (
    <>
      <Splitter direction={SplitDirection.Vertical} minHeights={[100, 100]}>
        <Editor currentCode={currentCode} setCurrentCode={setCurrentCode} />
        <TestCases running={running} resultMessage={resultMessage} handleRunTest={handleRunTest} />
      </Splitter>
    </>
  );
};

export default ExerciseDoing;
