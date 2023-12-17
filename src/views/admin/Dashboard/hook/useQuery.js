import { fetchReportCourse, fetchReportEnrollment, fetchReportSubmissions, fetchReportUsers, fetchReportViews } from 'apis/report';
import { useQuery } from 'react-query';

export const useFetchReportCourse = () => {
  return useQuery(['report-course'], () => fetchReportCourse(), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

export const useFetchReportEnrollment = (filter) => {
  return useQuery(['report-enrollment', filter], () => fetchReportEnrollment(filter), {
    initialData: [],
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

export const useFetchReportUsers = () => {
  return useQuery(['report-users'], () => fetchReportUsers(), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

export const useFetchReportViews = () => {
  return useQuery(['report-views'], () => fetchReportViews(), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

export const useFetchReportSubmissions = () => {
  return useQuery(['report-submissions'], () => fetchReportSubmissions(), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};
