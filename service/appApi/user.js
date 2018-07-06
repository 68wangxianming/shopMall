const Router = require('koa-router')

let router = new Router()
router.get('/', async (ctx) => {
  ctx.body = 'home page'
})
router.get('/register', async (ctx) => {
  ctx.body = 'register page'
})

module.exports = router
