import React, { useEffect, useState } from 'react';
import BasicDetail from './BasicDetail';
import CourseFeature from './Feature';
import CourseCircullum from './Circullum';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import LoadingScreen from 'components/LoadingScreen';
import axios from 'axios';
import config from '../../config';

const CourseDetail = () => {
  const [course, setCourse] = useState(null);
  const { id } = useParams();
  const [enrolled, setEnrolled] = useState(false);
  const [studentCount, setStudentCounts] = useState(0);

  useEffect(() => {
    const getCourse = async () => {
      const res = await axios.get(`${config.url}/course/${id}`);
      console.log('res', res)
      if (res.data) {
        setCourse(res.data);
      }
    };

    getCourse();
  }, [id]);

  useEffect(() => {
    const checkEnroll = async () => {
      const res = await axios.post(`${config.url}/enrollment/check/${course?._id}`);
      if (res.data) {
        setEnrolled(res.data.enrolled);
      }
    };

    checkEnroll();
  }, [course]);

  useEffect(() => {
    const getStudentCount = async () => {
      const res = await axios.get(`${config.url}/enrollment/total/${id}`);

      if (res.data) {
        setStudentCounts(res.data);
      }
    };

    getStudentCount();
  });

  return (
    <>
      {!course ? (
        <LoadingScreen />
      ) : (
        <div className="course-detail">
          <div className="grid grid-cols-12-gap-8">
            <div className="col-span-12">
              <BasicDetail
                thumb={course.image}
                name={course.name}
                lectures={course?.subjects?.length}
                studentCount={studentCount}
                overview={course.description}
                enrolled={enrolled}
                course={course}
                setEnrolled={setEnrolled}
              />
            </div>
          </div>
          <div className="container mx-auto px-44">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8 ">
                    <div className="course-detail-element">
                      <div className="course-overview-wrapper">
                        <div className="course-overview-title">Tổng quan</div>
                        <p className="course-overview">{course.description}</p>
                      </div>
                      <div className="course-requirements-wrapper">
                        <div className="course-overview-title">Yêu cầu</div>
                        <ul className="course-requirements-list">
                          {course.demand &&
                            course.demand?.[0]?.split(',').map((el) => {
                              return (
                                <li className="course-requirements-item">
                                  <span className="icon-check"></span>
                                  <p>{el}</p>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="course-detail-element">
                      <CourseFeature
                        course={course}
                        enrolled={enrolled}
                        studentCount={studentCount}
                        setEnrolled={setEnrolled}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-span-12">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-8">
                    <CourseCircullum />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetail;
