import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';

const BasicDetail = ({
  course,
  thumb,
  name,
  lectures,
  studentCount,
  overview,
  enrolled,
  setEnrolled
}) => {
  const history = useHistory();

  const handleEnroll = () => {
    try {
      const res = axios.post(`${config.url}/enroll`, {
        id: course._id
      });
      if (res.data._id) {
        setEnrolled(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
      </div>
    </div>
  );
};

export default BasicDetail;
