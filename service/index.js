const Koa = require('koa')
const app = new Koa()
const {connect} = require('./database/init');

(async ()=>{
  await connect()
})()

app.use(async (ctx) => {
  ctx.body = '<p>hello koa2</p>'
})

app.listen(5000, () => {
  console.log('服务成功');
})
