import React from 'react';
import { useHistory } from 'react-router-dom'

const BasicDetail = ({ thumb, name, lectures, studentCount, overview }) => {
  const history = useHistory()
  return (
    <div className="basic-detail">
      <div className="container mx-auto px-44">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-5">
            <div className="thumb">
              <img src={thumb} alt="thumb" />
            </div>
          </div>
          <div className="col-span-7">
            <div className="detail">
              <div className="course-name">{name}</div>
              <div className="course-info">
                <div className="course-info-item">
                  <span className="icon-play size-icon-3"></span>
                  {lectures} Lectures
                </div>
                <div className="course-info-item">
                  <span className="icon-user size-icon-3"></span>
                  {studentCount} Student enrolled
                </div>
              </div>
              <div className="course-desc">{overview}</div>
            </div>
            <div className="btn btn-primary hover-effect" onClick={() => history.push("/learning/html-css")}>Enroll Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetail;
