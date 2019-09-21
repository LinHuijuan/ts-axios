import { isPlainObject } from './utli'

function normalizeHeaderName (headers: any, normalizeName: string): void {
  if (!headers) {
    return
  }

  Object.keys(headers).forEach(name => {
    if (name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders (headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}