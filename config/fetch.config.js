/**
 * 请求配置
 */

import axios from 'axios';
import Vis from 'vis-ui';

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 加载中
  if (config.loading) {
    Vis.loading()
  }
  return config;
}, error => {
  return Promise.reject(error);
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  if (response.config) {
    Vis.loading('close')
  }
  return response;
}, error => {
  return Promise.reject(error);
})
