/**
 * 请求配置
 */

import axios from 'axios';

const deal = (data) => {
  switch (data.code) {
    case 'SUCCESS':
      break;
    // 用户登录过期
    case 'AUTH':
      break;
  }
}

// 添加请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
})


// 添加响应拦截器
axios.interceptors.response.use(response => {
  response.deal = deal.bind(null, response.data);
  return response;
}, error => {
  return Promise.reject(error);
})

/*fetch({
  url: 'xxx'
})
.then(response => {
  response.deal(data => {
    console.log(data);
  })
})*/
