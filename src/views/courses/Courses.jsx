import axios from 'axios';
import React, { useState, useEffect } from 'react';
import config from '../../config';
import Course from 'components/Course/Course/Course';

const Courses = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`${config.url}/course`);

      if (res.data) {
        setCategories(res.data);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="mx-auto px-44 pt-40">
      <div className="grid grid-cols-4 gap-8">
        {categories &&
          categories.map((course) => (
            <Course
              id={course._id}
              image={<img src={course.image} alt="course" />}
              title={course.name}
              views={course.views}
              time={course.hours}
              lectures={course.subjects.length}
            />
          ))}
      </div>
    </div>
  );
};

export default Courses;
