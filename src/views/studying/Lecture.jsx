import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import config from '../../config';
import convertSecondsToHMS from 'utils/convertSecondsToTime';

const Lecture = ({
  _id,
  index,
  name,
  isCompleted,
  time,
  isOpen,
  exerciseList,
  currentLecture,
  setCurrentLecture,
  handleActiveSubject
}) => {
  const history = useHistory();

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const getExercises = async () => {
      const res = await axios.get(`${config.url}/exercise/subject/${_id}`);
      if(res.data) {
        setExercises(res.data);
      }
    }

    getExercises();
  }, [_id]);

  const handleClick = () => {
    if(!isOpen) return;
    handleActiveSubject(_id)
  }

  const handleSetCurrent = () => {
    if(!isOpen) return;

    setCurrentLecture(index);
  }

  return (
    <div
      className={`exercise-wrapper ${!isOpen ? 'disable' : ''} ${
        currentLecture === index ? 'current' : ''
      }`}
      onClick={handleClick}
    >
      <div className="exercise-info" onClick={handleSetCurrent}>
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
          <p>{convertSecondsToHMS(time)}</p>
        </div>
      </div>
      {isOpen && exerciseList?.length > 0 &&  (
        <div className="quiz-list-wrapper shadow-md">
          <p>Bài tập: </p>
          <ul className="quiz-list">
            {exercises?.map((item, index) => {
              let isOpenEx = false;
              if (isOpen) {
                if (index === 0) {
                  isOpenEx = true;
                } else {
                  isOpenEx = exercises[index - 1].isCompleted;
                }
              }
              return (
                <li
                  key={index}
                  className={`quiz-item ${!isOpenEx ? 'disable' : ''} ${
                    item.isCompleted ? 'active' : ''
                  }`}
                  onClick={() => history.push(`/learning/${_id}/exercise/${item._id}`)}
                >
                  {item.isCompleted ? (
                    <span className="icon-check icon-color-active"></span>
                  ) : (
                    <span>{item.position + 1}</span>
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
