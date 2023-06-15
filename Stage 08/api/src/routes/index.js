const { Router } = require('express')

const userRoutes = require("./users.routes.js")

const routes = Router()
routes.use("/users", userRoutes)

module.exports = routes