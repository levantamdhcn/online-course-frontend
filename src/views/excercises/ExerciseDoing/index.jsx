import React, { useEffect, useState } from 'react';
import Editor from './Editor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCases from './TestCase';
import axios from 'axios';
import config from '../../../config';
import useSubject from 'hooks/useSubject';

const ExerciseDoing = ({ exercise, subjectId }) => {
  const { updateSubject } = useSubject();
  const [currentCode, setCurrentCode] = useState(exercise?.sampleCode);

  useEffect(() => {
    setCurrentCode(exercise?.sampleCode);
  }, [exercise]);

  const handleRunTest = async () => {
    try {
      const data = {};
      data._id = exercise?._id;
      data.script = currentCode;
      data.testCases = exercise?.testCases;
      const res = await axios.post(`${config.url}/exercise/execute`, data);
      if(res.data) {
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (status) => {
    updateSubject(subjectId, { isCompleted: status });
  }

  return (
    <>
      <Splitter direction={SplitDirection.Vertical}>
        <Editor currentCode={currentCode} setCurrentCode={setCurrentCode} />
        <TestCases cases={exercise?.testCases} handleRunTest={handleRunTest} handleSubmit={handleSubmit}/>
      </Splitter>
    </>
  );
};

export default ExerciseDoing;
