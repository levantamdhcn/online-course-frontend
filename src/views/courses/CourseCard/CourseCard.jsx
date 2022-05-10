import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CourseCard = ({ course }) => {
  const [studentCount, setStudentCount] = useState(0);
  useEffect(() => {
    const getStudentCount = async () => {
      const res = await axios.get(`${config.url}/enroll/total/${course._id}`);

      if (res.data) {
        setStudentCount(res.data);
      }
    };

    getStudentCount();
  }, [course]);
  const history = useHistory();
  return (
    <div
      class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover-effect"
      onClick={() => history.push(`/course/${course._id}`)}
    >
      <Link href="#">
        <img class="rounded-t-lg" src={course.image} alt="" />
      </Link>
      <div class="p-5">
        <Link href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {course.name}
          </h5>
        </Link>
        <div className="flex items-center">
          <span className="icon icon-user size-icon-4"></span>
          <span className="ml-2">{studentCount}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
