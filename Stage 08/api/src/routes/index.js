const { Router } = require('express')

const userRoutes = require("./users.routes.js")
const notesRoutes = require("./notes.routes.js")
const tagsRouter = require('./tags.routes.js')

const routes = Router()
routes.use("/users", userRoutes)
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRouter)

module.exports = routes