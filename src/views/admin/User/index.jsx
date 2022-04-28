import axios from 'axios';
import config from '../../../config';
import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`${config.url}/user`);
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <div className="search-bar">
        <input type="text" className="custom-input-field" placeholder="Tìm kiếm..." />
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-8">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Họ và tên
              </th>
              <th scope="col" class="px-6 py-3">
                Ảnh đại diện
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Vai trò
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Hành động</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={user._id}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {user._id}
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {user.username}
                    </th>
                    <td class="px-6 py-4">{user.fullname}</td>
                    <td class="px-6 py-4">
                      <img
                        width="40"
                        src={user.avatar}
                        alt="avatar"
                        style={{ borderRadius: '50%' }}
                      />
                    </td>
                    <td class="px-6 py-4">{user.email}</td>
                    <td class="px-6 py-4">{user.admin ? 'Admin' : 'Người dùng'}</td>
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
    </div>
  );
};

export default User;
