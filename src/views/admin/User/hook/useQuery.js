import { fetchReportUsers } from "apis/report";
import { useQuery } from "react-query";

export const useFetchUsers = () => {
    return useQuery(['user'], () => fetchReportUsers(), {
      refetchOnWindowFocus: false,
      cacheTime: 0
    });
  };