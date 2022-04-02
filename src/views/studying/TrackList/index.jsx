import React, { useState } from 'react';
import Lecture from '../Lecture';
import Track from './Track';

const TrackList = ({ lectureSection }) => {
  const [openTrack, setOpenTrack] = useState(null);
  const [currentLecture, setCurrentLecture] = useState(1);

  if (!lectureSection) {
    return <></>;
  }
  return (
    <div className="track-list-wrapper">
      {lectureSection &&
        lectureSection.map((el, index) => {
          const { id, name, time, lecturesList } = el;
          const completedLecture = lecturesList.filter((el) => el.isCompleted)?.length;

          const children = (
            <>
              {lecturesList.map((el, index) => {
                let isOpen = false;
                if (index === 0) {
                  isOpen = true;
                } else {
                  isOpen = lecturesList[index - 1].isCompleted;
                }
                return (
                  <Lecture
                    index={index + 1}
                    name={el.name}
                    isCompleted={el.isCompleted}
                    time={el.time}
                    isOpen={isOpen}
                    exerciseList={el.exercises}
                    currentLecture={currentLecture}
                    setCurrentLecture={setCurrentLecture}
                  />
                );
              })}
            </>
          );
          return (
            <Track
              id={index}
              index={id + 1}
              title={name}
              isOpen={openTrack === index}
              setIsOpen={setOpenTrack}
              totalLecture={lecturesList?.length}
              completedLecture={completedLecture}
              totalTime={time}
              children={children}
            ></Track>
          );
        })}
    </div>
  );
};

export default TrackList;
