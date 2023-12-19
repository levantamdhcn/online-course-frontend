import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ image, title, views, time, lectures, id }) => {
  return (
    <Link className="card" to={`/course/${id}`}>
      <div className="card-header">{image}</div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-info">
          <div className="course-info">
            <div className="course-views">
              <span className="icon-eye size-icon-2"></span>
              {views} lượt xem
            </div>
            <div className="course-time">
              <span className="icon-clock size-icon-2"></span>
              {time}
            </div>
            <div className="course-lectures">
              <span className="icon-play size-icon-2"></span>
              {lectures} bài giảng
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
