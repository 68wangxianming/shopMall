const mongoose = require('mongoose')
const db = 'mongodb://localhost'

exports.connect = () => {
  mongoose.connect(db)

  mongoose.connection.on('disconnected', () => {
    console.log('====数据库断开====')
    mongoose.connect(db)
  })

  mongoose.connection.on('error', () => {
    console.log('====数据库错误====')
    mongoose.connect(db)
  })

  mongoose.connection.on('open', () => {
    console.log('====数据库连接成功====')
  })
}
