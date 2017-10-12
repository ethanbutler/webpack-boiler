import getPosts from '../lib/getPosts'

const init = () => {
  console.log('front-page init')
}

const finalize = () => {
  $('#example-button').click(() => {
    getPosts()
    .then((response) => {
      const { data } = response
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  })
}

export {
  init,
  finalize
}
