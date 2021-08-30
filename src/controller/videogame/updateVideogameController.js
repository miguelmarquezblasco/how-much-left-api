const controller = require('express').Router()
const Videogame = require('../../model/Videogame')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.put('/:id', userExtractor, async (request, response, next) => {
  const videogame = request.body

  const updatedVideogame = {
    title: videogame.title,
    image: videogame.image,
    date: videogame.date
  }

  try {
    const newMovie = await Videogame.findByIdAndUpdate(request.params.id, updatedVideogame, { new: true })
    response.json(newMovie)
  } catch (error) { next(error) }
})

module.exports = controller
