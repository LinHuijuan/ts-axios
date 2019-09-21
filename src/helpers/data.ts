import { isPlainObject } from './utli'

export function transformRequest (data: any): any {
  if(isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}