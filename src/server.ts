import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello world 2.0'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Http Server Running!')
  })
