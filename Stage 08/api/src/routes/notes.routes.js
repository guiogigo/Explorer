const { Router } = require("express");

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router();

const notesController = new NotesController

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

notesRoutes.use(ensureAuthenticated);

notesRoutes.post('/', notesController.create)
notesRoutes.get('/', notesController.index)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes