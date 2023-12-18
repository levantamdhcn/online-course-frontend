import axiosClient from 'utils/axios';

const fetchSubjects = (courseId) => {
  return axiosClient.get(`/subject/course/${courseId}`);
};

const setCompleteSubjects = (data) => {
  return axiosClient.post(`/completion-subject`, data);
};

export { fetchSubjects, setCompleteSubjects };