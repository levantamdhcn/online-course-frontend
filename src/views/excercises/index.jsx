import React, { useState } from 'react';
import ExerciseDoing from './ExerciseDoing';
import ExerciseInfo from './ExerciseInfo';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import { useHistory } from 'react-router-dom';

const DoExercise = () => {
  const [currentTab, setCurrentTab] = useState('doing');
  const history = useHistory();
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
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
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
            <ExerciseInfo />
            <ExerciseDoing />
          </Splitter>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DoExercise);
