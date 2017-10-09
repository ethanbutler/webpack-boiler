const axios = require('axios')
const qs    = require('query-string')

import {
  url,
  rest
} from '../config'

const getPosts = (args) => {
  const endpoint = `${url}${rest}posts` + qs(args)

  return axios.get(endpoint)
}

export default getPosts
