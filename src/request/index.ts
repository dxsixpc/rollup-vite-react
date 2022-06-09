import axios from 'axios';
import type { AxiosError } from 'axios';
import { getErrorMsg } from './util';


export const request = axios;

// 响应拦截，对报错做统一处理
request.interceptors.response.use(
  (res) => {
    // 该返回的数据则是axios.then(res)中接收的数据
    return res;
  },
  (err: AxiosError) => {
    // 该返回的数据则是axios.catch(err)中接收的数据
    return Promise.reject(getErrorMsg(err));
  }
);
