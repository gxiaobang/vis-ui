/**
 * 请求入口
 */

// import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import proxyTable from 'config/proxy.conf';
import 'config/fetch.conf';
import mocks from '@/mocks';
import Vis from 'vis-ui';

let sysnames = Object.keys(proxyTable[NODE_REFER] || {});

// console.log(sysnames)

// 参数配置
const parameter = (options) => {

  let arr = options.url.split('/');
  let name = arr[0] || arr[1];
  if (NODE_REFER == 'prod') {
    if (sysnames.indexOf(name) > -1) {
      options.baseURL = api.prod[ name ];
    }
  }
  /*else {
    if (sysnames.indexOf(name) > -1) {
      options.url = `/proxy${options.url}`;
    }
  }*/

  return options;
};

const fetch = (options = {}) => {
  const { baseURL = '/api', url } = options;

  // 开启mock
  if (NODE_REFER == 'mock') {
    options.mock = true;
  }

  let promise;
  // mock请求
  if (options.mock) {
    promise = mocks(url, options.params, options.data);
  }
  else {
    promise = axios(parameter(options));
  }

  if (_.isFunction(options.onSuccess)) {
    promise.then(fetch.succ(options.onSuccess));
  }

  if (_.isFunction(options.onComplete)) {
    promise
      .then(response => {
        options.onComplete(response);
      })
      .catch(error => {
        options.onComplete(error.response);
      });
  }

  // 请求异常处理
  promise.catch(error => {
    console.log(error);
  });

  return promise;
};

fetch.succ = (callback) => {
  return (response) => {
    let { data } = response;

    // 操作成功
    if (data.code == 'SUCCESS') {
      callback && callback(data);
    }
    // 用户过期
    else if (data.code == 'AUTH') {

    }
    else {
      let message = data.message;
      if (message) {
        if (!_.isArray(message)) message = [message];
        // Dialog.alert(message.map((msg, index) => <div key={index}>{msg}</div>),  'warn');

        Vis.Dialog.alert(message.join('；'), 'warn');
      }
    }
  }
}

// fetch({
//   url: 'xxx',
//   params: {}
// }).then(fetch.succ(data => {

// }))

export default fetch;
