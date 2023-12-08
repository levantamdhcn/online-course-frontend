import { addExercise, fetchExercises } from "apis/exercise";
import { useQuery, useMutation } from "react-query";
import { toast } from "react-toastify";

const useFetchExercises = (filter) => {
  return useQuery(['exercises', filter], () => fetchExercises(filter), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

const useAddExercises = (callback) => {
  return useMutation((payload) => addExercise(payload), {
    onSuccess: (newProduct) => {
        callback && callback(newProduct);
    },
    onError: (error) => {
        toast.error(error.response.data.message.toString());
    },
});
}

export { useFetchExercises, useAddExercises };