import { addExercise, deleteExercise, fetchExercise, fetchExercises, updateExercise } from 'apis/exercise';
import { useQuery, useMutation } from 'react-query';
import { toast } from 'react-toastify';

const useFetchExercises = (filter) => {
  return useQuery(['exercises', filter], () => fetchExercises(filter), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

const useFetchExercise = (id) => {
  return useQuery(['exercise-by-id', id], () => fetchExercise(id), {
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
    }
  });
};

export const useUpdateExercise = (id, callback) => {
  return useMutation((payload) => updateExercise(id, payload), {
    onSuccess: (resp) => {
      callback && callback(resp);
    },
    onError: (error) => {
      toast.error(error.response.data.message.toString());
    },
  });
};

export const useDeleteExercise = (callback) => {
  return useMutation((id) => deleteExercise(id), {
      onSuccess: () => {
          callback && callback();
      },
      onError: (error) => {
          toast.error(error.response.data.message.toString());
      },
  });
};

export { useFetchExercises, useAddExercises, useFetchExercise };
