import axiosClient from 'utils/axios';

const runSubmission = (payload) => {
  return axiosClient.post(`/submission/run`, payload);
};

const fetchLatestSubmission = (exerciseId) => {
  return axiosClient.get(`/submission/exercise/${exerciseId}`);
}

export { runSubmission, fetchLatestSubmission };