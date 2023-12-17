import qs from "query-string";
import axiosClient from 'utils/axios';

const fetchReportCourse = () => {
  return axiosClient.get(`/report/course`);
};

const fetchReportViews = () => {
  return axiosClient.get(`/report/views`);
};

const fetchReportUsers = () => {
  return axiosClient.get(`/report/users`);
};

const fetchReportSubmissions = () => {
  return axiosClient.get(`/report/submissions`);
};

const fetchReportEnrollment = (filter) => {
  return axiosClient.get(`/report/enrollment?${qs.stringify(filter)}`);
};

export { fetchReportCourse, fetchReportViews, fetchReportUsers, fetchReportSubmissions, fetchReportEnrollment };
