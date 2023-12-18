import { fetchSubjects, setCompleteSubjects } from 'apis/subject';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

export const useFetchSubject = (courseId) => {
  return useQuery(['subjects', courseId], () => fetchSubjects(courseId), {
    initialData: [],
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

export const useSetCompleteSubject = (callback) => {
  return useMutation((payload) => setCompleteSubjects(payload), {
    onSuccess: (newProduct) => {
      callback && callback(newProduct);
    },
    onError: (error) => {
      toast.error(error.response.data.message.toString());
    }
  });
};
