import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import config from '../../../config';

const CourseFeature = ({ course, enrolled, studentCount }) => {
  const features = [
    {
      icon: 'user',
      name: 'Học viên',
      value: studentCount
    },
    {
      icon: 'play',
      name: 'Bài giảng',
      value: course?.subjects?.length
    },
    {
      icon: 'quiz',
      name: 'Bài tập',
      value: 40
    },
  ];

  const history = useHistory();

  const handleEnroll = () => {
    try {
      const res = axios.post(`${config.url}/enrollment`, {
        id: course._id
      });
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="course-feature-wrapper ">
      <div className="course-overview-title">Tính năng</div>
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
        {enrolled ? (
          <button
            className="btn btn-primary rounded-2xl hover-effect flex items-center justify-between h-12"
            onClick={() => history.push(`/learning/${course._id}`)}
          >
            Tiếp tục học
            <span className="icon-arrow-right ml-2 bg-white"></span>
          </button>
        ) : (
          <button
            className="btn btn-primary rounded-2xl hover-effect flex items-center justify-between h-12"
            onClick={handleEnroll}
          >
            Đăng ký ngay
            <span className="icon-arrow-right ml-2 bg-white"></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseFeature;
