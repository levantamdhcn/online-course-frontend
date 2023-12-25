import axiosClient from 'utils/axios';

const fetchUsers = () => {
  return axiosClient.get(`/user`);
}

const removeUser = (id) => {
  return axiosClient.delete(`/user/${id}`);
}

export { fetchUsers, removeUser };