import axios from 'axios';
import React, { useState, useEffect } from 'react';
import config from '../../config';
import Course from 'components/Course/Course/Course';

const Courses = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`${config.url}/category`);

      if (res.data) {
        setCategories(res.data);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="mx-auto px-44 pt-40">
      {categories &&
        categories.map((el) => (
          <div className="category mb-20" key={el._id}>
            <h1 className="mb-4 text-2xl font-bold">{el.name}</h1>
            <div className="grid grid-cols-4 gap-8">
              {el?.courses?.map((course) => (
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
        ))}
    </div>
  );
};

export default Courses;