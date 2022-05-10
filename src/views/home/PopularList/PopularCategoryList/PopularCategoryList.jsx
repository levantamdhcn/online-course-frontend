import { useEffect, useRef, useState } from 'react';
import Category from 'components/Course/Category/Category';
import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import config from '../../../../config';
import LoadingScreen from 'components/LoadingScreen';

const settings = {
  accessibility: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  cssEase: 'linear'
};

const PopularCategoryList = () => {
  const categoryRef = useRef();
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      const getCourse = async () => {
        const res = await axios.get(`${config.url}/course`);
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
      <div className="px-44 pt-20 pb-50" style={{ backgroundColor: '#f4f8fa' }}>
        <div className="popular-list-title mb-4">Got & Popular Categories</div>
        <div className="popular-list">
          <Slider {...settings} ref={categoryRef}>
            {courses &&
              courses.map((el) => {
                return (
                  <div className="popular-item" key={el._id}>
                    <Category
                      image={<img src={el.image} alt="course" />}
                      title={el.name}
                      views={el.views}
                      time={el.hours}
                      courses={el.lectures}
                    />
                  </div>
                );
              })}
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
      {loading && <LoadingScreen />}
    </>
  );
};

export default PopularCategoryList;
