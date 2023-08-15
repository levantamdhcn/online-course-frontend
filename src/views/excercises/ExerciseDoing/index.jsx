import React from 'react';
import Editor from './Editor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCases from './TestCase';

const ExerciseDoing = ({ exercise }) => {
  return (
    <>
      <Splitter direction={SplitDirection.Vertical}>
        <Editor sampleCode={exercise?.sampleCode || ''} />
        <TestCases cases={exercise?.testCases} />
      </Splitter>
    </>
  );
};

export default ExerciseDoing;
