import React from 'react';

const ProgressBar = ({ total, current }) => {
  const count = () => {
    return (current * 100) / total;
  };
  return (
    <div className="progress-bar">
      <div className="progress">
        <div className="inner">
          <span className="current-progress">{count().toFixed(0)} %</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
