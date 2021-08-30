const bcrypt = require('bcrypt')
const loginController = require('express').Router()
const User = require('../../../model/User')
const jwt = require('jsonwebtoken')

loginController.post('/', async (request, response, next) => {
  const { username, password } = request.body

  try {
    const user = await User.findOne({ username })
    const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
      response.status(401).json({ error: 'Invalid username or password' })
    }

    const userForToken = {
      id: user._id,
      username: user.username
    }

    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: process.env.TOKEN_EXPIRATION })

    response.send({
      username: user.username,
      token
    })
  } catch (error) { next(error) }
})

module.exports = loginController
