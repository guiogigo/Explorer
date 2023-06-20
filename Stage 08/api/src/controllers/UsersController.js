const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require('../database/sqlite')

class UserController {
  async create(request, response) {
    const {user, email, password} = request.body

    const database = await sqliteConnection()
    const CheckUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(CheckUserExists) {
      throw new AppError("Este email já está em uso")
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [user, email, hashedPassword]
    );

    return response.status(201).json()
  }
}

module.exports = UserController