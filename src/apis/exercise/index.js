import axios from 'axios';
import qs from 'query-string';
import config from '../../config';
import axiosClient from 'utils/axios';

const fetchExercises = (filter) => {
  let queryParam = 'exercise' + `?${qs.stringify({
    subjects: filter.subjects,
  })}`;
  return axios.get(`${config.url}/${queryParam}`);
};

const fetchExercise = (id) => {
  return typeof id === "undefined"
    ? Promise.reject(new Error("Invalid id"))
    : axiosClient.get(`/exercise/${id}`);
};

const addExercise = (payload) => {
  return axiosClient.post(`/exercise`, payload);
}

const updateExercise = (id, payload) => {
  return axiosClient.patch(`/exercise/${id}`, payload);
}

const deleteExercise = (id) => {
  return axiosClient.delete(`/exercise/${id}`);
};

export { deleteExercise, fetchExercise, fetchExercises, addExercise, updateExercise };
