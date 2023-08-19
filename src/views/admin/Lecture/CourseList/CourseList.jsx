import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../../../config';

const CourseList = ({ value, setValue }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const getCourses = async () => {
      const response = await axios.get(`${config.url}/course`);
      setCourses(response.data);
    };
    getCourses();
  }, []);
  useEffect(() => {
    if (courses) {
      setValue(courses[0]);
    }
  }, [courses]);
  return (
    <div className="relative max-w-xxs">
      <label className="custom-input-label">Chọn khóa học:</label>
      <div
        className="px-4 py-3 bg-white w-full flex items-center justify-between cursor-pointer shadow-md rounded-md"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        {value && value.name}
        <span className="icon icon-arrow-down w-3 h-3"></span>
      </div>
      {openMenu && (
        <div className="absolute bg-white shadow-md w-full z-50 mt-1 rounded-md py-2">
          <input
            type="text"
            className=" px-3 py-2 rounded-md w-75 ml-4 border border-slate-300 focus:outline-0 mb-2"
            placeholder="Tìm kiếm khóa học"
          />
          {courses &&
            courses.map((el) => {
              return (
                <div
                  className="px-4 py-3 hover:bg-slate-300 cursor-pointer"
                  onClick={() => {
                    setValue(el);
                    setOpenMenu(false);
                  }}
                >
                  {el.name}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default CourseList;
