import { loadEvents } from './lib/util'
const $ = require('jquery')

const routes = [
  'front-page',
  'page',
  'single'
]

$(document).ready(() => {
  loadEvents(routes)
})
