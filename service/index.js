const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect, initSchemas} = require('./database/init.js')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const cors = require('koa2-cors')
app.use(cors())

const Router = require('koa-router')
let user = require('./appApi/user')
let home = require('./appApi/home')
let router = new Router()
router.use('/user', user.routes())
router.use('/home', home.routes())

app.use(router.routes())
app.use(router.allowedMethods())
// ;(async () => {
//   await connect()
//   initSchemas()
//   const User = mongoose.model('User')
//   let oneUser = new User({userName: '社会主义', password: '12345'})
//   oneUser.save().then(() => {
//     console.log('插入成功')
//   })
//   let user =await User.findOne({}).exec()
//   console.log('给我出来');
//   console.log(user);
// })()

app.use(async (ctx) => {
  ctx.body = '<p>hello koa2</p>'
})

app.listen(5000, () => {
  console.log('服务成功');
})
