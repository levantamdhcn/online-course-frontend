import axiosClient from 'utils/axios';

const fetchCategories = () => {
  return axiosClient.get(`/category`);
};

const fetchCategoryDetail = (id) => {
  return axiosClient.get(`/category/${id}`);
};

const addCategory = (payload) => {
  return axiosClient.post(`/category`, payload);
};

const updateCategory = (id, payload) => {
  return axiosClient.patch(`/category/${id}`, payload);
};

const removeCategory = (id) => {
  return axiosClient.delete(`/category/${id}`);
};

const addCourse = (id, payload) => {
  return axiosClient.patch(`/category/add-course/${id}`, payload);
};

const removeCourse = (id, payload) => {
  return axiosClient.patch(`/category/remove-course/${id}`, payload);
};

export {
  fetchCategories,
  fetchCategoryDetail,
  addCategory,
  removeCategory,
  updateCategory,
  addCourse,
  removeCourse
};
