const Koa = require('koa')
const route = require('./route')

const app = new Koa()
const port = 5000

app.use(route.routes())
app.use(route.allowedMethods())

app.listen(port, () => {
  console.log(`running on port : http://localhost:${port}`)
})
