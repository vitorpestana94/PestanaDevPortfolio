import axios, { AxiosError } from "axios";

export const nextAuthRequest = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

nextAuthRequest.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        message: (error.response.data as any)?.message ?? "unexpected",
        data: error.response.data,
      });
    }

    if (error.request) {
      return Promise.reject({ status: 0, message: "FC13",
      });
    }

    return Promise.reject({
      status: 500,
      message: error.message,
    });
  }
);