const Router = require('koa-router')

let router = new Router()
router.get('/', async (ctx) => {
  ctx.body = 'home page'
})
router.post('/register', async (ctx) => {
  console.log(ctx.request.body);
  ctx.body = '恭喜发财'
})

module.exports = router
