const controller = require('express').Router()
const Videogame = require('../../model/Videogame')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.delete('/:id', userExtractor, async (request, response, next) => {
  try {
    Videogame.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) { next(error) }
})

module.exports = controller
