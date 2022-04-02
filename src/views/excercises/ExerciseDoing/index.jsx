import React from 'react';
import Editor from './Editor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCases from './TestCase';

const ExerciseDoing = () => {
  return (
    <>
      <Splitter direction={SplitDirection.Vertical}>
        <Editor />
        <TestCases />
      </Splitter>
    </>
  );
};

export default ExerciseDoing;
