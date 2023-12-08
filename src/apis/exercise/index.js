import axios from 'axios';
import qs from 'query-string';
import config from '../../config';

const fetchExercises = (filter) => {
  let queryParam = 'exercise' + `?${qs.stringify({
    subjects: filter.subjects,
  })}`;
  return axios.get(`${config.url}/${queryParam}`);
};

const addExercise = (payload) => {
  return axios.post(`${config.url}/exercise`, payload);
}

export { fetchExercises, addExercise };
