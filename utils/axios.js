import axios from 'axios';

const service = axios.create({
  // 可以设置通用的baseURL
  baseURL: "http://localhost:8090",
  timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 从localStorage获取token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;