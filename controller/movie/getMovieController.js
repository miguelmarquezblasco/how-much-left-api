const controller = require('express').Router()
const Movie = require('../../model/Movie')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.get('/', userExtractor, async (request, response, next) => {
  try {
    const movies = await Movie.find({})
    response.json(movies.length > 0 ? movies : [])
  } catch (error) { next(error) }
})

controller.get('/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const movie = await Movie.findById(id)
    movie ? response.json(movie) : response.status(404).json({ error: `Movie with id ${id} not found` })
  } catch (error) { next(error) }
})

controller.get('/remaining/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const movie = await Movie.findById(id)

    const movieDate = new Date(movie.date)
    const currentDate = new Date()

    const timeDifference = currentDate.getTime() - movieDate.getTime()
    const daysRemaining = timeDifference / (1000 * 3600 * 24)

    movie
      ? response.json({
        title: movie.title,
        image: movie.image,
        days_remaining: parseInt(daysRemaining)
      })
      : response.status(404).json({ error: `Movie with id ${id} not found` })
  } catch (error) { next(error) }
})

module.exports = controller
