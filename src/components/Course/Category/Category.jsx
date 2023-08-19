import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ image, title, courses }) => {
  return (
    <Link className="card" to="/courses">
      {/* <div className="card-header">{image}</div> */}
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-info">
          <div className="course-info">
            <div className="course-lectures">
              <span className="icon-play size-icon-2"></span>
              {courses} courses
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
