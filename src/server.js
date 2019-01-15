const express = require('express')
const mongoose = require('mongoose')
const databaseConfig = require('./config/database')
class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewhares()
    this.routes()
  }

  database () {
    mongoose.connect(
      databaseConfig.uri,
      {
        useCreateIndex: true,
        useNewUrlParser: true
      }
    )
  }

  middlewhares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
