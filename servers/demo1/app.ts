import axios from '../../src/index'

axios({
  method: 'get',
  url: '/demo1/get',
  params: {
    a: 1,
    b: 2
  }
})