import React, { useState } from 'react';

const TestCaseTab = ({ cases, data, setData, errorTab, passedTab }) => {
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
                  <span>Test case {idx + 1}</span>
                  {
                    errorTab.includes(idx) ? (
                      <span className="icon icon-error size-icon-4 color-error"></span>
                    ) : passedTab.includes(idx) ? <span className="icon icon-check size-icon-4 color-active"></span> : ''
                  }
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
