/**
 * mock数据
 */

import Mock from 'mockjs';

const mocks = (url, params = null, data = null) => {
  if (NODE_REFER == 'mock') {
    console.groupCollapsed('mock')
    console.table([{
      url, params, data
    }])
    console.groupEnd();
  }

  url = url.replace(/^\//, '');

  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== 'production') {
      setTimeout(() => {
        import('@/mocks/' + url + '.json')
          .then(json => {
            json = Mock.mock(json);
            resolve({ data: json });
          })
          .catch(error => {
            console.error('%s Url is not found!', '/' + url);
          })
      }, 500);  // 500ms后返回数据
    }
  });
}

export default mocks;
