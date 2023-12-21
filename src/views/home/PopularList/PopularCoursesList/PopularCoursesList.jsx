import { useRef, useState, useEffect } from 'react';

import Course from 'components/Course/Course/Course';
import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import config from '../../../../config';
import LoadingScreen from 'components/LoadingScreen';

const PopularCoursesList = () => {
  const sliderRef = useRef();
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  const settings = {
    accessibility: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: courses?.length <= 2 ? courses?.length : 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    cssEase: 'linear'
  };

  useEffect(() => {
    try {
      setLoading(true);
      const getCourse = async () => {
        const res = await axios.get(`${config.url}/course/popular`);
        if (res.data) {
          setCourses(res.data);
          setLoading(false);
        }
      };
      getCourse();
    } catch (error) {}
  }, []);

  return (
    <>
      <div className="px-44 pt-20 pb-50">
        <div className="popular-list-title mb-4">Khóa học phổ biến</div>
        <div className="popular-list">
          <Slider {...settings} ref={sliderRef}>
            {courses &&
              courses.map((el) => {
                return (
                  <div className="popular-item" key={el._id}>
                    <Course
                      id={el._id}
                      image={<img src={el.image} alt="course" />}
                      title={el.name}
                      views={el.views}
                      time={el.hours}
                      lectures={el?.subjects?.length}
                    />
                  </div>
                );
              })}
          </Slider>
          <div className="arrows-group">
            <button
              className="arrow-btn arrow-prev"
              onClick={() => sliderRef?.current?.slickPrev()}
            >
              <span className="icon-arrow-left"></span>
            </button>
            <button
              className="arrow-btn arrow-next"
              onClick={() => sliderRef?.current?.slickNext()}
            >
              <span className="icon-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {loading && LoadingScreen}
    </>
  );
};

export default PopularCoursesList;
