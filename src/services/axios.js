import axios from "axios";

const cookie = JSON.parse(sessionStorage.getItem("cookie"));

const instance = axios.create({
  baseURL: "https://libro1-api.herokuapp.com",
  timeout: 10000,
  headers: {
    "user-token": cookie ? cookie.token : "",
  },
});

export default instance;
