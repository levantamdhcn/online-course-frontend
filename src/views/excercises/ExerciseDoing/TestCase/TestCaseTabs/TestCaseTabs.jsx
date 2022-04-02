import React, { useState } from 'react';

const TestCaseTab = () => {
  const [data, setData] = useState({
    input: '7',
    actualOutput: '',
    expectOutput: 'The score is valid',
    timeLimit: '500 ms',
    excuteTime: '',
    message: ''
  });
  // eslint-disable-next-line
  const [currentTab, setCurrentTab] = useState(1);
  const tabData = [
    {
      input: '7',
      actualOutput: '',
      expectOutput: 'The score is valid',
      timeLimit: '500 ms',
      excuteTime: '',
      message: ''
    },
    {
      input: '8',
      actualOutput: '',
      expectOutput: 'The score is valid',
      timeLimit: '600 ms',
      excuteTime: '',
      message: ''
    },
    {
      input: '9',
      actualOutput: '',
      expectOutput: 'The score is valid',
      timeLimit: '700 ms',
      excuteTime: '',
      message: ''
    },
    {
      input: '10',
      actualOutput: '',
      expectOutput: 'The score is valid',
      timeLimit: '800 ms',
      excuteTime: '',
      message: ''
    },
    {
      input: '11',
      actualOutput: '',
      expectOutput: 'The score is valid',
      timeLimit: '800 ms',
      excuteTime: '',
      message: ''
    }
  ];
  const tabsName = [
    {
      name: 'Input',
      value: data.input
    },
    {
      name: 'Actual output',
      value: data.actualOutput
    },
    {
      name: 'Expected output:',
      value: data.expectOutput
    },
    {
      name: 'Execute time limit',
      value: data.timeLimit
    },
    {
      name: 'Execute time',
      value: data.excuteTime
    },
    {
      name: 'Message',
      value: data.message
    }
  ];
  return (
    <>
      <div className="test-case-tabs">
        <ul>
          <li
            className={`test-case-tab ${currentTab === 1 && 'active'}`}
            onClick={() => setData(tabData[0])}
          >
            Test case 1
          </li>
          <li
            className={`test-case-tab ${currentTab === 2 && 'active'}`}
            onClick={() => setData(tabData[1])}
          >
            Test case 2
          </li>
          <li
            className={`test-case-tab ${currentTab === 3 && 'active'}`}
            onClick={() => setData(tabData[2])}
          >
            Test case 3
          </li>
          <li
            className={`test-case-tab ${currentTab === 4 && 'active'}`}
            onClick={() => setData(tabData[3])}
          >
            <span className="icon-lock-fulfill"></span>
            <p>Test case 4</p>
          </li>
          <li
            className={`test-case-tab ${currentTab === 5 && 'active'}`}
            onClick={() => setData(tabData[4])}
          >
            <span className="icon-lock-fulfill"></span>
            <p>Test case 4</p>
          </li>
          <li
            className={`test-case-tab ${currentTab === 6 && 'active'}`}
            onClick={() => setData(tabData[4])}
          >
            <span className="icon-lock-fulfill"></span>
            <p>Test case 4</p>
          </li>
          <li
            className={`test-case-tab ${currentTab === 1 && 'active'}`}
            onClick={() => setData(tabData[3])}
          >
            <span className="icon-lock-fulfill"></span>
            <p>Test case 4</p>
          </li>
        </ul>
      </div>
      <div className="test-case-current-content">
        <ul className="tabs-list">
          {tabsName.map((el) => {
            return (
              <li className="tab-item">
                <p>{el.name}: </p>
                <p>{el.value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TestCaseTab;
