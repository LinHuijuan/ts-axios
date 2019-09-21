import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { url, method = 'get', data =null, headers} = config
  const request = new XMLHttpRequest()

  // 第三个参数：同步/异步(false/true)，默认是异步也就是true，可以不用填写。
  request.open(method.toUpperCase(), url)

  Object.keys(headers).forEach(name => {
    if (data === null && name === 'Content-Type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.send(data)
}