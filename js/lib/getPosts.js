const axios = require('axios')
const qs    = require('query-string')

import {
  url,
  rest
} from '../config'

/**
 * Returns a promise resolving to an array of post objects, based on provided arguments.
 *
 * Ex. usage:
 *
 * getPosts({
 *   category: 5,
 *   count: 2
 * })
 * .then((res) => {
 *   console.log(res.data)
 * })
 * .catch((err) => {
 *   console.log(err)
 * })
 *
 * See axios documentation for handling responses.
 * https://github.com/axios/axios#response-schema
 * https://github.com/axios/axios#handling-errors
 *
 * @param  {object}   args Query params as property:value pairs.
 * @return {Promise}       Promise that resolves with an array of post objects or
 *                         rejects with an error message.
 */
const getPosts = (args) => {
  const endpoint = `${url}${rest}posts` + qs(args)
  return axios.get(endpoint)
}

export default getPosts
