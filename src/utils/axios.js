import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  refreshAccessToken,
  resetAccessToken,
} from "./jwt";

import API from "../../config/api/endpoints";

const client = axios.create({ baseURL: API.BASE_URL });

client.interceptors.request.use(
  request => {
    const token = getAccessToken();
    if (token) request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  error => Promise.reject(error)
);

client.interceptors.response.use(
  response => response,
  async error => {
    const { config: originalRequest, response: errResponse } = error;

    if (errResponse?.status === 401 && !originalRequest._retry) {
      try {
        const token = getRefreshToken();
        if (!token) return Promise.reject(error);

        originalRequest._retry = true;
				resetAccessToken();
				await refreshAccessToken();
        return client(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }
);

export default client;
