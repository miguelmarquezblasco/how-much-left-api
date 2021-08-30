const controller = require('express').Router()
const Book = require('../../model/Book')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.delete('/:id', userExtractor, async (request, response, next) => {
  try {
    Book.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) { next(error) }
})

module.exports = controller
