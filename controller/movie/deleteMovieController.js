const controller = require('express').Router()
const Movie = require('../../model/Movie')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.delete('/:id', userExtractor, async (request, response, next) => {
  try {
    Movie.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) { next(error) }
})

module.exports = controller
