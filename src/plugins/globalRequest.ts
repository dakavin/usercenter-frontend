/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';
import {message} from "antd";
import {stringify} from "querystring";


/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  // requestType: 'form',
  prefix : process.env.NODE_ENV === 'production' ? 'http://user-backend.dakkk.top' : undefined
});

/**
 * 所以请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`do request url = ${url}`)
  return {
    url,
    options: {
      ...options,
      headers: {},
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  const result = await response.clone().json();
  if (result.code === 0) {
    return result.data;
  }
  if (result.code === 40100) {
    message.error('请先登录');
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: location.pathname,
      }),
    })
  } else {
    message.error(result.description)
  }
  return result.data;
});

export default request;
