import { fetchReportCourse, fetchReportEnrollment, fetchReportOverview, fetchReportSubmissions, fetchReportUsers, fetchReportViews } from 'apis/report';
import { fetchSubmissions } from 'apis/submission';
import { useQuery } from 'react-query';

export const useFetchReportOverview = () => {
  return useQuery(['report-overview'], () => fetchReportOverview(), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

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

export const useFetchSubmissionByExercise = (exerciseId) => {
  console.log('exerciseId', exerciseId);
  return useQuery(['submission-by-exercise', exerciseId], () => fetchSubmissions(exerciseId), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};
