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
}, err => {
  return Promise.reject(err);
})

// 添加响应拦截器
axios.interceptors.response.use(res => {
  if (res.config) {
    Vis.loading('close')
  }
  return res;
}, err => {
  return Promise.reject(err);
})

// 业务处理返回值 成功或失败
axios.succ = (callback) => {
  return res => {

  }
}
