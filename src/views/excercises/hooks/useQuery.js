import { toast } from 'react-toastify';
import { useQuery, useMutation } from 'react-query';
import { fetchLatestSubmission, runSubmission } from "apis/submission";

export const useRunSubmission = (callback) => {
  return useMutation((payload) => runSubmission(payload), {
    onSuccess: (resp) => {
      callback && callback(resp);
    },
    onError: (error) => {
      toast.error(error.response.data.message.toString());
    }
  });
};

export const useFetchLatestSubmission = (exerciseId) => {
  return useQuery(['submission-by-exercise-id', exerciseId], () => fetchLatestSubmission(exerciseId), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};
