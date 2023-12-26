import axiosClient from 'utils/axios';

const fetchCategories = () => {
  return axiosClient.get(`/category`);
}

export { fetchCategories };