import axios from 'axios';

// 创建axios实例
export const request = axios.create();

// 响应拦截，对报错做统一处理
request.interceptors.response.use(
  (req) => {
    // 请求成功对响应数据做处理
    // 该返回的数据则是axios.then(res)中接收的数据
    return req;
  },
  (err) => {
    console.log(err);
    if (err.response) {
      // 失败响应的status需要在response中获得
      console.log(err.response);
      switch (err.response.status) {
        // 对不同状态码的报错处理
        case 401:
          console.log('未登录');
          window.location.href = '/';
          break;
        case 404:
          window.location.href = '/';
          break;
        case 405:
          console.log('不支持的方法');
          break;
        // case ...
        default:
          console.log('其他错误');
          break;
      }
    }
    // 该返回的数据则是axios.catch(err)中接收的数据
    return Promise.reject(err);
  }
);

export const testFunction = (value: string) => {
  console.log(value || 'test');
};
