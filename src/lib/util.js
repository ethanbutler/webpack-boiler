const fire = (routeName, funcname, args) => {
  try {
    const route = require('../routes/' + routeName)
    route[funcname || 'init']()
  } catch(err) {
    console.log(err)
  }
}

const loadEvents = (routes) => {
  const { body } = document
  const { id } = body
  const classes = body.className.split(/\s+/)

  fire('common', null, id)

  classes.forEach(className => {
    if(routes.includes(className)){
      fire(className, null, id)
    }
  })

  fire('common', 'finalize', id)

  classes.forEach(className => {
    if(routes.includes(className)){
      fire(className, 'finalize', id)
    }
  })
}

export {
  fire,
  loadEvents
}
