import React, { useState } from 'react';
import Lecture from '../Lecture';
import Track from './Track';

const TrackList = ({ handleActiveSubject, subjects }) => {
  const [currentLecture, setCurrentLecture] = useState(1);

  if (!subjects) {
    return <></>;
  }

  return (
    <div className="track-list-wrapper">
      {
        subjects.map((el, index) => {
          let isOpen = false;
          if (index === 0) {
            isOpen = true;
          } else {
            isOpen = subjects[index - 1].isCompleted;
          }
          return (
            <Lecture
              _id={el._id}
              index={index + 1}
              name={el.name}
              isCompleted={true}
              time={el.duration}
              isOpen={isOpen}
              exerciseList={el.exercises}
              currentLecture={currentLecture}
              setCurrentLecture={setCurrentLecture}
              handleActiveSubject={handleActiveSubject}
            />
          );
        })
      }
    </div>
  );
};

export default TrackList;
