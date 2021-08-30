const bcrypt = require('bcrypt')
const controller = require('express').Router()
const User = require('../../model/User')

controller.post('/', async (request, response, next) => {
  try {
    const { body } = request
    const { username, password, email } = body
    const passwordHash = await bcrypt.hash(password, 10)

    const user = new User({ username, passwordHash, email })

    const savedUser = await user.save()
    response.status(201).json(savedUser)
  } catch (error) { next(error) }
})

module.exports = controller
