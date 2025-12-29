"use server";

import Axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const AxiosService = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosService;
