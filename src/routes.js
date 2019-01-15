const express = require('express')

const routes = express.Router()

const UserConstroller = require('./app/controllers/UserController')

routes.post('/users', UserConstroller.store)

module.exports = routes
