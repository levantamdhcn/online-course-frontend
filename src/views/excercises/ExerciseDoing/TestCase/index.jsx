import React, { useState } from 'react';
import TestCaseTab from './TestCaseTabs/TestCaseTabs';
import ResultPanel from './ResultPanel';

const TestCases = ({ cases, handleRunTest, handleSubmit }) => {
  // eslint-disable-next-line
  const [passed, setPassed] = useState(false);
  const [passedTab, setPassedTab] = useState([]);
  const [errorTab, setErrorTab] = useState([]);
  const [data, setData] = useState({
    input: cases?.[0]?.paramValue?.join(', '),
    message: ''
  });

  const handleRun = async () => {
    setErrorTab([]);
    setPassedTab([]);
    const result = await handleRunTest();
    if(result.sucess) {
      setPassed(true);
      setErrorTab([]);
      const passedCase = [];
      for(let i=0; i< cases.length;i++) {
        passedCase.push(i);
      };
      setPassedTab(passedCase);
    } else {
      const errCase = [];
      for(let i=result.at_test; i< cases.length;i++) {
        errCase.push(i);
      };
      setErrorTab(errCase);
      setData({
        input: cases?.[result.at_test]?.paramValue?.join(', '),
        message: result.message,
      });
    }
  } 

  const submit = () => {
    debugger
    if(errorTab.length > 0) return;
    handleSubmit(true);
  }

  return (
    <div className="test-case-container">
      <h1 className="test-case-heading">Bài kiểm tra</h1>
      <div className="test-case-body">
        {/* <TestCaseTab cases={cases} data={data} setData={setData} errorTab={errorTab} setErrorTab={setData} passedTab={passedTab} /> */}
        <ResultPanel />
      </div>
      <div className="test-case-footer">
        <button className={`btn btn-primary ${errorTab.length > 0 ? 'disabled' : ''}`} onClick={submit}>
          <span className="icon-save"></span>
          Kiểm tra &amp; Nộp bài
        </button>
      </div>
    </div>
  );
};

export default TestCases;
