import { fetchCategories } from "apis/category";
import { useQuery } from "react-query";

export const useFetchCategories = () => {
    return useQuery(['category'], () => fetchCategories(), {
      refetchOnWindowFocus: false,
      cacheTime: 0
    });
  };
  