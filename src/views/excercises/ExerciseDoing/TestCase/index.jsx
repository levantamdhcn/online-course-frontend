import React, { useState } from 'react';
import TestCaseTab from './TestCaseTabs/TestCaseTabs';

const TestCases = ({ cases }) => {
  // eslint-disable-next-line
  const [passed, setPassed] = useState(false);
  const runTestCase = () => {
    try {
      const code = `function add(a, b) {
        return a + b;
      }`
      const testCase = {
        "a": 3,
        "b": 5
      };
      const expectedOutput = 8;
      const evaluatedOutput = eval(`(${code})(${JSON.stringify(testCase)})`);
      console.log('evaluatedOutput', evaluatedOutput);
      if (evaluatedOutput === expectedOutput) {
        console.log('Test case passed');
      } else {
        console.log('Test case failed');
      }
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };
  return (
    <div className="test-case-container">
      <h1 className="test-case-heading">TEST CASE</h1>
      <div className="test-case-body">
        <TestCaseTab cases={cases} />
      </div>
      <div className="test-case-footer">
        <button className="btn btn-primary" onClick={runTestCase}>
          <span className="icon-control-forward"></span>
          Chạy thử
        </button>
        <button className={`btn btn-submit`}>
          <span className="icon-save"></span>
          Nộp bài
        </button>
      </div>
    </div>
  );
};

export default TestCases;
