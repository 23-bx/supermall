// 封装axios模块

// 引入axios
import axios from '../../node_modules/axios/lib/axios.js'

// 1.使用回调函数
// export function request(config, success, fallure) {
//   // 创建axios实例，注意不要在全局创建
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config).then(res => {
//     // console.log(res);
//     success(res);
//   }).catch(err => {
//     // console.log(err);
//     fallure(err);
//   })
// }

// 2.使用promise
export function request(config) {
  return new Promise((resolve, reject) => {
    // (1) 创建axios实例，注意不要在全局创建const instance = axios.create({
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //(2) axios的拦截器：在请求或响应被then或catch处理前拦截它们。
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      // 在发送请求前执行的操作
      console.log(config);
      // 拦截后再将config原封不动的返回，才能保证之后的操作不会出错
      return config;
    }, err => {
      // 请求执行错误后执行的操作
      console.log(err);
    })
    //(3) 添加响应拦截器
    instance.interceptors.response.use(res => {
        // 对响应数据做点什么
        // console.log(res);
        // 一般只需要用到data
        console.log(res.data);
        return res;
      }, err => {
        // 对响应错误做点什么
        console.log(err);
      });
    //(4) 发送真正的网络请求
    instance(config)
      .then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
  })
}

// （有错误）3.instance(config)本身就会返回一个Promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 创建axios实例，注意不要在全局创建const instance = axios.create({
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     return instance(config)
//   })
// }
