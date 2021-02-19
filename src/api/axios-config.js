import axios from "axios";
import qs from "qs";
// npm install https-proxy-agent
import store from "../store";

// import qs from "qs";
import { DEFAULT_BASEURL, DEFAULT_TIMEOUT } from "@configs/api";

import { msg } from "@utils/antd-utils";
// axios POST https net::ERR_CERT_COMMON_NAME_INVALID

const instance = axios.create({
  baseURL: DEFAULT_BASEURL,
  timeout: DEFAULT_TIMEOUT,
  // 跨域【https://segmentfault.com/q/1010000008671922】
  // headers: { "content-type": "application/x-www-form-urlencoded" },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*"
  },
  // SpringBoot Axios 【https://segmentfault.com/a/1190000013312233】
  transformRequest: [
    function(data) {
      if (data) {
        console.log("请求 data      " + data);
      }
      return qs.stringify(data);
    }
  ]
});
// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    config.headers = Object.assign(config.headers, {
      Authorization: store.getters.token.token,
      AuthorizationCode: store.getters.token.tokenCode
    });
    // Do something before request is sent
    console.log("interceptors.request 请求拦截");
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    console.log("interceptors.response 响应拦截");
    console.log(response);
    console.log("interceptors.response msg    " + response.data.msg);
    msg(response.data);
    return response;
  },
  function(error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export { instance as axiosInstance };
export const CancelToken = axios.CancelToken;
export const CANCEL_TOKEN = "cancelToken";

/**
 * 获取取消令牌资源
 */
export function getCancelTokenSource() {
  return CancelToken.source();
}

export function isCancel(value) {
  return axios.isCancel(value);
}

/**
 * 取消请求
 * 使用前 axiosConfig 添加 cancelToken 参数，值为 getCancelTokenSource();
 * 使用 source.cancel('Operation canceled by the user.'); // message可选
 * 取消后的处理：
 * .catch(function(thrown) {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      } else {
        // 处理错误
      }
    });
 */
