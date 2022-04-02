import React from 'react';

const LectureList = ({ lectures }) => {
  return (
    <ul className="lectures-list">
      {lectures &&
        lectures.map((el) => {
          return (
            <li className="lectures-item">
              <div className="lectures-item-left">
                <div className="lectures-item-index">
                  <span className="icon-play size-icon-2"></span>
                  <p>
                    Lecture: {el.index < 10 ? '0' : ''}
                    {el.index}
                  </p>
                </div>
                <p className="lectures-item-name">{el.title}</p>
              </div>
              <div className="lectures-item-right">
                {el.status === 'available' ? (
                  <span className="icon-eye active"></span>
                ) : (
                  <span className="icon-lock"></span>
                )}
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default LectureList;
