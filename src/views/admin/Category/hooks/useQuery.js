import { fetchCategoryDetail, fetchCategories, addCategory, updateCategory, removeCategory, addCourse, removeCourse } from 'apis/category';
import { useMutation, useQuery } from 'react-query';
import { toast } from "react-toastify";

export const useFetchCategories = () => {
  return useQuery(['category'], () => fetchCategories(), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

export const useFetchCategoryDetail = (id) => {
  return useQuery(['category', id], () => fetchCategoryDetail(id), {
    refetchOnWindowFocus: false,
    cacheTime: 0
  });
};

export const useAddCategory = (callback) => {
  return useMutation((data) => addCategory(data), {
    onSuccess: (newReview) => {
      callback && callback(newReview);
    },
    onError: (error) => {
      toast.error(error.response.data.message.toString());
    },
  });
};

export const useUpdateCategory = (id, callback) => {
  return useMutation((data) => updateCategory(id, data), {
    onSuccess: (newReview) => {
      callback && callback(newReview);
    },
    onError: (error) => {
      toast.error(error.response.data.message.toString());
    },
  });
};

export const useRemoveCategory = (callback) => {
  return useMutation((data) => removeCategory(data), {
    onSuccess: () => {
      callback && callback();
    },
    onError: (error) => {
      toast.error(error.response.data.message.toString());
    },
  });
};

export const useAddCourse = (id, callback) => {
  return useMutation((data) => addCourse(id, data), {
    onSuccess: (res) => {
      callback && callback(res);
    },
    onError: (error) => {
      toast.error(error.response.data.message.toString());
    },
  });
};

export const useRemoveCourse = (id, callback) => {
  return useMutation((data) => removeCourse(id, data), {
    onSuccess: (res) => {
      callback && callback(res);
    },
    onError: (error) => {
      toast.error(error.response.data.message.toString());
    },
  });
};


