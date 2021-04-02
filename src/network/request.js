import axios from "axios";
import { notification } from 'antd';

export function request(config) {
  const http1 = axios.create({
    baseURL: "//roc.luojing.top:3001",
    timeout: 1000 * 60
  })
  // 请求拦截
  http1.interceptors.request.use(
    config => {

      return config;
    },
    err => {
      return console.log(err)
    }
  )
  // 响应拦截
  http1.interceptors.response.use(
    res => {
			if(res.data.code == 200){
				return res.data;
			}else{
				notification.open({
					message: '请求错误',
					description: '网络异常请刷新页面',
				});
			}
    },
    err => {
      return console.log(err);
    }
  )
  return http1(config)
}