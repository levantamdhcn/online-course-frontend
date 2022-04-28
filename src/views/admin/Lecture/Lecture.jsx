import axios from 'axios';
import config from '../../../config';
import React, { useState, useEffect } from 'react';
import ModalWrapper from 'components/ModalWrapper/ModalWrapper';
import CreateCourseModal from '../CreateCourseModal';

const Lecture = () => {
  const [lectures, setLectures] = useState(null);
  const [addLecture, toggleAddLecture] = useState(false);
  useEffect(() => {
    const getLectures = async () => {
      const response = await axios.get(`${config.url}/course`);
      setLectures(response.data);
    };
    getLectures();
  }, []);
  return (
    <div>
      <div className="search-bar">
        <input type="text" className="custom-input-field" placeholder="Tìm kiếm..." />
      </div>
      <button className="btn btn-primary" onClick={() => toggleAddLecture(true)}>
        Thêm bài giảng
      </button>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-8">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Tên khóa học
              </th>
              <th scope="col" class="px-6 py-3">
                Mô tả
              </th>
              <th scope="col" class="px-6 py-3">
                Hình ảnh
              </th>
              <th scope="col" class="px-6 py-3">
                Yêu cầu
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Hành động</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {lectures &&
              lectures.length > 0 &&
              lectures.map((course) => {
                return (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={course._id}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {course._id}
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {course.name}
                    </th>
                    <td class="px-6 py-4">{course.description}</td>
                    <td class="px-6 py-4">
                      <img
                        width="40"
                        src={course.image}
                        alt="avatar"
                        style={{ borderRadius: '50%' }}
                      />
                    </td>
                    <td class="px-6 py-4">{course.demand}</td>
                    <td class="px-6 py-4 text-right">
                      <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <ModalWrapper
        title={'Thêm bài giảng'}
        toggleShow={toggleAddLecture}
        show={addLecture}
        children={<CreateCourseModal />}
      ></ModalWrapper>
    </div>
  );
};

export default Lecture;
