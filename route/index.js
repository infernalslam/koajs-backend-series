var Router = require('koa-router')

const router = Router()

router.get('/', (ctx) => {
  ctx.body = { text: 'Hello Koajs' }
})

module.exports = router
