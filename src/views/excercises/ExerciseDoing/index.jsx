import React, { useEffect, useState } from 'react';
import Editor from './Editor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCases from './TestCase';
import axios from 'axios';
import config from '../../../config';
import useSubject from 'hooks/useSubject';
import useAuth from 'hooks/useAuth';

const ExerciseDoing = ({ submission, exercise, subjectId }) => {
  const { user } = useAuth();
  const { updateSubject } = useSubject();
  const [currentCode, setCurrentCode] = useState(exercise?.sampleCode);

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
      if(submission) {
        data._id = submission?._id;
      }
      data.user = user._id;
      data.exercise = exercise._id;
      data.language = 'javascript';
      data.solution = currentCode;
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
      <Splitter direction={SplitDirection.Vertical} minHeights={[100, 100]}>
        <Editor currentCode={currentCode} setCurrentCode={setCurrentCode} />
        <TestCases cases={exercise?.testCases} handleRunTest={handleRunTest} handleSubmit={handleSubmit}/>
      </Splitter>
    </>
  );
};

export default ExerciseDoing;
