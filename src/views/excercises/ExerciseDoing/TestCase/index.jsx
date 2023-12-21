import React from 'react';
import ResultPanel from './ResultPanel';
import { Button, Spinner } from '@chakra-ui/react';

const TestCases = ({ running, resultMessage, handleRunTest }) => {
  return (
    <div className="test-case-container">
      <h1 className="test-case-heading">Bài kiểm tra</h1>
      <div className="test-case-body">
        {/* <TestCaseTab cases={cases} data={data} setData={setData} errorTab={errorTab} setErrorTab={setData} passedTab={passedTab} /> */}
        {
          resultMessage && <ResultPanel resultMessage={resultMessage} />
        }
      </div>
      <div className="test-case-footer">
        <Button className={`btn btn-primary`} onClick={handleRunTest}>
          {
            running ? <Spinner color='white' /> : (
              <>
                <span className="icon-save"></span>
                Kiểm tra &amp; Nộp bài
              </>
            )
          }
          
          
        </Button>
      </div>
    </div>
  );
};

export default TestCases;
