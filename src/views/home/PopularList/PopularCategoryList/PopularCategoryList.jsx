import { useRef } from 'react';
import Category from 'components/Course/Category/Category';
import React from 'react';
import CourseImage from 'assets/images/course.jpg';
import Slider from 'react-slick';

const settings = {
  accessibility: false,
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 4,
  arrows: false,
  autoplay: false,
  cssEase: 'linear'
};

const PopularCategoryList = () => {
  const categoryRef = useRef();

  return (
    <div className="px-44 pt-80 pb-50" style={{ backgroundColor: '#f4f8fa' }}>
      <div className="popular-list-title mb-4">Got & Popular Categories</div>
      <div className="popular-list">
        <Slider {...settings} ref={categoryRef}>
          <div className="popular-item">
            <Category
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              courses={52}
            />
          </div>
          <div className="popular-item">
            <Category
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              courses={52}
            />
          </div>
          <div className="popular-item">
            <Category
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              courses={52}
            />
          </div>
          <div className="popular-item">
            <Category
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              courses={52}
            />
          </div>
          <div className="popular-item">
            <Category
              image={<img src={CourseImage} alt="course" />}
              title={'The Complete Financial Analyst Training & Investing Course'}
              views={8525}
              time={'8h15min'}
              courses={52}
            />
          </div>
        </Slider>
        <div className="arrows-group">
          <button
            className="arrow-btn arrow-prev"
            onClick={() => categoryRef?.current?.slickPrev()}
          >
            <span className="icon-arrow-left"></span>
          </button>
          <button
            className="arrow-btn arrow-next"
            onClick={() => categoryRef?.current?.slickNext()}
          >
            <span className="icon-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCategoryList;
