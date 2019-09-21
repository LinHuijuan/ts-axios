import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/demo2-url/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/demo2-url/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()

// axios({
//   method: 'get',
//   url: '/demo2-url/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/demo2-url/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// axios({
//   method: 'get',
//   url: '/demo2-url/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/demo2-url/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

// axios({
//   method: 'get',
//   url: '/demo2-url/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

// axios({
//   method: 'post',
//   url: '/demo2-url/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// axios({
//   method: 'post',
//   url: '/demo2-url/post',
//   headers: {
//     'content-type': 'application/json;charset=utf-8'
//   },
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// const arr = new Int32Array([21, 31])

// axios({
//   method: 'post',
//   url: '/demo2-url/buffer',
//   data: arr
// })


// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)

// axios({
//   method: 'post',
//   url: '/demo2-url/post',
//   data: searchParams
// })

axios({
  method: 'post',
  url: '/demo2-url/post',
  data: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/demo2-url/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then((res) => {
  console.log(res)
})
