import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000,
  });

  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      // console.log(err)
    }
  );

  // 响应拦截器
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      // console.log(err)
    }
  );

  // 发送请求
  return instance(config);
}
