import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: 'user',
    name: 'Student Enrolled',
    value: 1740
  },
  {
    icon: 'play',
    name: 'Lectures',
    value: 10
  },
  {
    icon: 'quiz',
    name: 'Exercise',
    value: 40
  },
  {
    icon: 'clock',
    name: 'Duration',
    value: `${60} hours`
  },
  {
    icon: 'rank',
    name: 'Skill level',
    value: 'Beginner'
  }
];

const CourseFeature = () => {
  return (
    <div className="course-feature-wrapper ">
      <div className="course-overview-title">Course Features</div>
      <ul className="feature-list">
        {features &&
          features.map((el) => {
            return (
              <li className="feature-item" key={el.name}>
                <div className="feature-item-left">
                  <span className={`icon-${el.icon}`}></span>
                  <div className="feature-item-name">{el.name}:</div>
                </div>
                <div className="feature-item-value">{el.value}</div>
              </li>
            );
          })}
        <div className="feature-item"></div>
      </ul>
      <div className="feature-bottom">
        <Link to="/" className="btn btn-primary rounded-2xl hover-effect">
          Enroll Now
          <span className="icon-arrow-right"></span>
        </Link>
      </div>
    </div>
  );
};

export default CourseFeature;
