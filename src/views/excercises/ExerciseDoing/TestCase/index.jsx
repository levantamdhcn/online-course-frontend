import React from 'react';
import ResultPanel from './ResultPanel';

const TestCases = ({ handleRunTest }) => {
  return (
    <div className="test-case-container">
      <h1 className="test-case-heading">Bài kiểm tra</h1>
      <div className="test-case-body">
        {/* <TestCaseTab cases={cases} data={data} setData={setData} errorTab={errorTab} setErrorTab={setData} passedTab={passedTab} /> */}
        <ResultPanel />
      </div>
      <div className="test-case-footer">
        <button className={`btn btn-primary`} onClick={handleRunTest}>
          <span className="icon-save"></span>
          Kiểm tra &amp; Nộp bài
        </button>
      </div>
    </div>
  );
};

export default TestCases;
