import axios, { AxiosError } from "axios";

export const clientApi = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

clientApi.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        message: (error.response.data as any)?.message ?? "UNEXPECTED ERROR.",
        data: error.response.data,
      });
    }

    if (error.request) {
      return Promise.reject({ status: 0, message: "SERVER UNAVAILABLE",
      });
    }

    return Promise.reject({
      status: 500,
      message: error.message,
    });
  }
);