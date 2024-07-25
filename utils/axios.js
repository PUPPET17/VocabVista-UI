import axios from 'axios';
import { UniAdapter } from "uniapp-axios-adapter";

const service = axios.create({
  baseURL: "http://localhost:8090",
  timeout: 100000, // Request timeout
  adapter: UniAdapter,
});

// Request interceptor
service.interceptors.request.use(
  config => {
    // Get the token from localStorage
    const token = uni.getStorageSync('token');
    console.log(token);
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Retry utility function
const retryRequest = async (config) => {
  const maxRetries = 3;

  // If no retry count, set it to 0
  if (!config.__retryCount) {
    config.__retryCount = 0;
  }

  // Retry request if retry count is less than maxRetries
  if (config.__retryCount < maxRetries) {
    config.__retryCount += 1;
    // Delay before retrying the request
    await new Promise(resolve => setTimeout(resolve, 1000));
    return service(config);
  }

  return Promise.reject(error);
};

// Response interceptor with retry logic
service.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const { config, response } = error;

    if (!config) {
      // If no config, reject immediately
      return Promise.reject(error);
    }

    // Retry request if status is 500
    if (response && response.status === 500) {
      return retryRequest(config);
    }

    return Promise.reject(error);
  }
);

export default service;
