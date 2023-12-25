import { fetchUsers, removeUser } from "apis/user";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

export const useFetchUsers = () => {
  return useQuery(['user'], () => fetchUsers(), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

export const useDeleteUser = (callback) => {
  return useMutation((id) => removeUser(id), {
      onSuccess: () => {
        callback && callback();
      },
      onError: (error) => {
        toast.error(error.response.data.message.toString());
      },
  });
};
