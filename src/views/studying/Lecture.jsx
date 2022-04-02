import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Lecture = ({
  index,
  name,
  isCompleted,
  time,
  isOpen,
  exerciseList,
  currentLecture,
  setCurrentLecture
}) => {
  const history = useHistory();
  return (
    <div
      className={`exercise-wrapper ${!isOpen ? 'disable' : ''} ${
        currentLecture === index ? 'current' : ''
      }`}
    >
      <div className="exercise-info" onClick={() => setCurrentLecture(index)}>
        <h3 className="exercise-info-title">
          {index}. {name}
          <span
            className={`exercise-status ${
              !isOpen ? 'icon-lock icon-color-grey' : isCompleted ? 'icon-check active' : ''
            }`}
          ></span>
        </h3>
        <div className="exercise-info-desc">
          <span className="icon-play-fullfil"></span>
          <p>{time}</p>
        </div>
      </div>
      {isOpen && (
        <div className="quiz-list-wrapper shadow-md">
          <p>Bài tập: </p>
          <ul className="quiz-list">
            {exerciseList?.map((item, index) => {
              let isOpenEx = false;
              if (isOpen) {
                if (index === 0) {
                  isOpenEx = true;
                } else {
                  isOpenEx = exerciseList[index - 1].isCompleted;
                }
              }
              return (
                <li
                  key={index}
                  className={`quiz-item ${!isOpenEx ? 'disable' : ''} ${
                    item.isCompleted ? 'active' : ''
                  }`}
                  onClick={() => history.push('/learning/html-css/exercise/1')}
                >
                  {item.isCompleted ? (
                    <span className="icon-check icon-color-active"></span>
                  ) : (
                    <span>{item.id + 1}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Lecture;
