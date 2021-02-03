import axios from "axios";

export const getHeaders = (token) => {
  return {
    headers: {
      "user-token": token,
    },
  };
};

export const restClient = axios.create({
  baseURL: "https://libro1-api.herokuapp.com",
  timeout: 10000,
});
