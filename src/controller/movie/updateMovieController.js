const controller = require('express').Router()
const Movie = require('../../model/Movie')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.put('/:id', userExtractor, async (request, response, next) => {
  const movie = request.body

  const updatedMovie = {
    title: movie.title,
    image: movie.image
  }

  try {
    const newMovie = await Movie.findByIdAndUpdate(request.params.id, updatedMovie, { new: true })
    response.json(newMovie)
  } catch (error) { next(error) }
})

module.exports = controller
