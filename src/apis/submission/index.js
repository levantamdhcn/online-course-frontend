import axiosClient from 'utils/axios';

const runSubmission = (payload) => {
  return axiosClient.post(`/submission/run`, payload);
};

export { runSubmission };