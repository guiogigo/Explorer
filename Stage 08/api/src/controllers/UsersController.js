const AppError = require("../utils/AppError")

class UserController {
  create(request, response) {
    const {user, email, password} = request.body

    if(!user) {
      throw new AppError('Nome é obrigatório')
    }

    response.json({user, email, password})
  }
}

module.exports = UserController