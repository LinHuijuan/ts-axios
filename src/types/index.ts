/* 
* 公用的类型定义文件
*/

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}

// 只能传入合法的字符串
export type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'