import React, { useState } from 'react';

const TestCaseTab = ({ cases }) => {
  const [data, setData] = useState({
    input: cases?.[0]?.paramValue?.join(', '),
    message: ''
  });
  // eslint-disable-next-line
  const [currentTab, setCurrentTab] = useState(1);
  const tabsName = [
    {
      name: 'Input',
      value: data.input
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
          {
            cases && cases?.map && cases?.map((item, idx) => {
              return (
                <li
                  className={`test-case-tab ${currentTab === 1 && 'active'}`}
                  onClick={() => setData({
                    input: item.paramValue.join(', '),
                    timeLimit: '500 ms',
                    excuteTime: '',
                    message: ''
                  })}
                >
                  Test case {idx + 1}
                </li>
              )
            })
          }
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
