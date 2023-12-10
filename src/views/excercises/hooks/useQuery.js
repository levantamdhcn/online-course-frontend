import { toast } from 'react-toastify';
import { useMutation } from "react-query";
import { runSubmission } from "apis/submission";

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
