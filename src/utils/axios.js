import axios from "axios";
import queryString from "query-string";

import config from '../config'

const axiosClient = axios.create({
  baseURL: config.url,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response?.data?.statusCode === 403) {
      window.location.href = window.location.hostname;
    }
    throw error;
  }
);


export default axiosClient;
