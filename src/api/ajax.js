// ajax请求函数模块
// 返回值：promise对象（异步返回的数据是response.data）
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-redeclare
export default function axios (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步ajxa
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let datastr = ''
      Object.keys(data).forEach(key => {
        datastr += key + '+' + data[key] + '&'
      })
      if (datastr !== '') {
        datastr = datastr.substring(0, datastr.lastIndexOf('&'))
        url = url + '?' + datastr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then((response) => {
      resolve(response.data)
    }).catch((err) => {
      reject(err)
    })
  })
}
