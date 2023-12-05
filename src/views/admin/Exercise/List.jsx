import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useFetchExercises } from './hooks/useQuery';
import FilterDropdown from 'components/FilterDropdown';
import axios from 'axios';
import config from '../../../config';

export const List = () => {
  const history = useHistory();
  const [subjects, setSubjects] = useState([]);
  const [selected, setSelected] = useState([]);

  let { data, refetch, isRefetching } = useFetchExercises({
    subjects: selected.map(option => option.value),
  });

  React.useEffect(() => {
    const getSubjects = async () => {
      try {
        const res = await axios.get(`${config.url}/subject`);
        if (res.data) {
          setSubjects(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getSubjects();
  }, []);

  const statusCheck = useCallback((isCompleted) => {
    if (isCompleted) {
      return 'Đã hoàn thành';
    } else {
      return 'Chưa hoàn thành';
    }
  }, []);

  const options = React.useMemo(() => {
    return subjects.map((subject) => ({
      label: subject.name,
      value: subject._id
    }));
  }, [subjects]);

  return (
    <div>
      <div className="search-bar">
        <input type="text" className="custom-input-field" placeholder="Tìm kiếm..." />
      </div>
      <button
        className="btn btn-primary float-right"
        onClick={() => {
          history.push('admin/lecture');
        }}
      >
        Thêm bài giảng
      </button>
      {/* <CourseList value={value} setValue={setValue} /> */}
      <FilterDropdown label="Chọn bài giảng" options={options} value={selected} onChange={setSelected} />
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-8">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Tên bài tập
              </th>
              <th scope="col" class="px-6 py-3">
                Vị trí
              </th>
              <th scope="col" class="px-6 py-3">
                Trạng thái
              </th>
              <th scope="col" class="px-6 py-3">
                Bài giảng
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Hành động</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data?.length > 0 &&
              data.data.map((exercise) => {
                return (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={exercise._id}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {exercise._id}
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {exercise.question}
                    </th>
                    <td class="px-6 py-4">{exercise.position}</td>
                    <td class="px-6 py-4">{statusCheck(exercise.isCompleted)}</td>
                    <td class="px-6 py-4">{exercise?.subject_id?.name}</td>
                    <td class="px-6 py-4 text-right">
                      <button
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {}}
                      >
                        Cập nhật
                      </button>
                      <button
                        class="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {}}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
