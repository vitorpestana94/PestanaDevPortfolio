"use server";

import Axios from "axios";

const baseURL = process.env.API_URL;

const AxiosService = Axios.create({
   baseURL,
   headers: {
      "Content-Type": "application/json",
   },
});

export default AxiosService;
