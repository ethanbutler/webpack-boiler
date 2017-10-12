// This file handles DOM-based routing using ES2015 imports.
//
// Based on Paul Irish's DOM-based routing.
// https://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
//
// If you're not interested in this, and just want the sweet juicy WebPack boilerplate,
// just delete ./routes and the content of this file and start from scratch – no offense taken :)
//
// (This file assumes you have jQuery in the global scope, which since you're
//  building with WordPress you 99% likely do.)

// This statements loads the loadEvents() utility from ./lib/util.
import { loadEvents } from './lib/util'

// Routes correspond to a particular body class string. For each string added to this array,
// loadEvents() will load and fire modules ~if~ that string is a class on <body>.
//
// For instance, a single post with ID 42 might have routes named `single` and `postid-42`.
//
// Routes will be fired synchronously, so put them in this array in the order you need them
// to be fired.
//
// Each route should be added as a module in ./routes that exports functions named `import`
// and `export.`
const routes = [
  'front-page',
  'page',
  'single'
]

// On document.ready, fire all routes.
$(document).ready(() => {
  loadEvents(routes)
})
