const controller = require('express').Router()
const User = require('../../model/User')

controller.get('/', async (request, response, next) => {
  try {
    const users = await User.find({})
    response.json(users)
  } catch (error) { next(error) }
})

controller.get('/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const user = await User.findById(id)
    user ? response.json(user) : response.status(404).json({ error: `User with id ${id} not found` })
  } catch (error) { next(error) }
})

module.exports = controller
