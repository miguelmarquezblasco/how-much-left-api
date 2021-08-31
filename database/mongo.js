const mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connection = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI

mongoose.connect(connection).catch(error => console.log(error))

process.on('uncaughtException', error => {
  console.error(error)
  mongoose.disconnect()
})
