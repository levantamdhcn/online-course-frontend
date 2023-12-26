import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFetchCategories } from './hooks/useQuery';
import LoadingScreen from 'components/LoadingScreen';

const List = () => {
  const history = useHistory();

  const { data, refetch, isLoading } = useFetchCategories();

  if(isLoading) return <LoadingScreen />

  return (
    <div>
      <div className="search-bar">
        <input type="text" className="custom-input-field" placeholder="Tìm kiếm..." />
      </div>
      <button
        className="btn btn-primary float-right"
        onClick={() => {
          history.push('category/add');
        }}
      >
        Thêm danh mục
      </button>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-8">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                STT
              </th>
              <th scope="col" class="px-6 py-3">
                Tên danh mục
              </th>
              <th scope="col" class="px-6 py-3">
                Số lượng bài giảng
              </th>
              <th scope="col" class="px-6 py-3">
                Tên rút gọn
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Hành động</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.length > 0 &&
              data.map((category, idx) => {
                return (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={category._id}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {idx + 1}
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {category.name}
                    </th>
                    <td class="px-6 py-4">{category?.courses?.length}</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {category.slug}
                    </th>
                    <td class="px-6 py-4 text-right">
                      <button
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => history.push(`category/${category._id}`)}
                      >
                        Cập nhật
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

export default List;
