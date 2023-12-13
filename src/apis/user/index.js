import axiosClient from 'utils/axios';

const fetchUsers = () => {
  return axiosClient.get(`/user`);
}

export { fetchUsers };