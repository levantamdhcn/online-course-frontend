import { fetchExercises } from "apis/exercise";
import { useQuery } from "react-query";

const useFetchExercises = (filter) => {
  return useQuery(['exercises', filter], () => fetchExercises(filter), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

export { useFetchExercises };