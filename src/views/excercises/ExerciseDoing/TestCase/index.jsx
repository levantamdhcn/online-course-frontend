import React, { useState } from 'react';
import TestCaseTab from './TestCaseTabs/TestCaseTabs';

const TestCases = () => {
  // eslint-disable-next-line
  const [passed, setPassed] = useState(false);
  return (
    <div className="test-case-container">
      <h1 className="test-case-heading">TEST CASE</h1>
      <div className="test-case-body">
        <TestCaseTab />
      </div>
      <div className="test-case-footer">
        <button className="btn btn-primary">
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
