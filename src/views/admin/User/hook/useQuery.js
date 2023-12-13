import { fetchUsers } from "apis/user";
import { useQuery } from "react-query";

export const useFetchUsers = () => {
    return useQuery(['user'], () => fetchUsers(), {
      refetchOnWindowFocus: false,
      cacheTime: 0
    });
  };