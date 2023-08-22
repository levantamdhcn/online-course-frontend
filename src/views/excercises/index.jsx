import React, { useState, useEffect } from 'react';
import ExerciseDoing from './ExerciseDoing';
import ExerciseInfo from './ExerciseInfo';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import config from '../../config';
import axios from 'axios';

const DoExercise = ({ handleRunTest }) => {
  const { subjectId, exerciseId } = useParams();
  const [exercise, setExercise] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [currentTab, setCurrentTab] = useState('doing');
  const history = useHistory();

  useEffect(() => {
    const getEx = async () => {
      const res = await axios.get(`${config.url}/exercise/${exerciseId}`);
      if (res.data) {
        setExercise(res.data);
      }
    };

    getEx();
  }, [exerciseId]);

  useEffect(() => {
    const getExs = async () => {
      const res = await axios.get(`${config.url}/exercise/subject/${subjectId}`);
      if (res.data) {
        setExercises(res.data);
      }
    };

    getExs();
  }, [exerciseId, subjectId]);

  const handleGoToExcerise = (id) => {
    history.push(`/learning/${subjectId}/exercise/${id}`);
  };

  return (
    <div className="exercise">
      <div className="exercise-header">
        <div className="container flex items-center justify-between h-full w-full p-4">
          <div className="exercise-header-left">
            <span className="icon-arrow-left" onClick={history.goBack}></span>
            <p>Tên bài học</p>
          </div>
          <div className="exercise-header-middle">
            <ul>
              {exercises &&
                exercises?.map &&
                exercises?.map((item, idx) => {
                  return (
                    <li
                      className={`${exercise._id === item._id ? 'active' : ''}`}
                      onClick={() => handleGoToExcerise(item._id)}
                    >
                      {idx + 1}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="exercise-header-right"></div>
        </div>
      </div>
      <div className="exercise-body">
        <nav className="exercise-nav-left">
          <ul>
            <li
              className={`${currentTab === 'doing' && 'active'}`}
              onClick={() => setCurrentTab('doing')}
            >
              <span className="icon-exercise"></span>
            </li>
            <li
              className={`${currentTab === 'commenting' && 'active'}`}
              onClick={() => setCurrentTab('commenting')}
            >
              <span className="icon-message-rounded"></span>
            </li>
          </ul>
        </nav>

        <div className="do-exercise">
          <Splitter direction={SplitDirection.Horizontal}>
            <ExerciseInfo exercise={exercise} />
            <ExerciseDoing exercise={exercise} handleRunTest={handleRunTest} subjectId={subjectId}/>
          </Splitter>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DoExercise);
