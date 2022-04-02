import { useRef } from 'react';

import Course from 'components/Course/Course/Course';
import React from 'react';
import CourseImage from 'assets/images/course.jpg';
import Slider from 'react-slick';

const settings = {
  accessibility: false,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  cssEase: 'linear'
};

const PopularCoursesList = () => {
  const sliderRef = useRef();

  return (
    <div className="px-44 pt-80 pb-50">
      <div className="popular-list-title mb-4">Featured Courses</div>
      <div className="popular-list">
        <Slider {...settings} ref={sliderRef}>
          <div className="popular-item">
            <Course
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              lectures={52}
            />
          </div>
          <div className="popular-item">
            <Course
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              lectures={52}
            />
          </div>
          <div className="popular-item">
            <Course
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              lectures={52}
            />
          </div>
          <div className="popular-item">
            <Course
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              lectures={52}
            />
          </div>
          <div className="popular-item">
            <Course
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              lectures={52}
            />
          </div>
        </Slider>
        <div className="arrows-group">
          <button className="arrow-btn arrow-prev" onClick={() => sliderRef?.current?.slickPrev()}>
            <span className="icon-arrow-left"></span>
          </button>
          <button className="arrow-btn arrow-next" onClick={() => sliderRef?.current?.slickNext()}>
            <span className="icon-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCoursesList;
