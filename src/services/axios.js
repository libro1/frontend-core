import axios from "axios"

const instance = axios.create({
  baseURL: 'https://libro1-api.herokuapp.com',
  timeout: 10000,
  headers: {'user-token': sessionStorage.getItem('sessionToken')}
});

export default instance
