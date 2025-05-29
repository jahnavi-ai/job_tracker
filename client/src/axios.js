import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // your backend base URL
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // get token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // attach token header
  }
  return config;
});

export default instance;

