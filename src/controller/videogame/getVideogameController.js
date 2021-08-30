const controller = require('express').Router()
const Videogame = require('../../model/Videogame')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.get('/', userExtractor, async (request, response, next) => {
  try {
    const videogames = await Videogame.find({})
    response.json(videogames.length > 0 ? videogames : [])
  } catch (error) { next(error) }
})

controller.get('/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const videogame = await Videogame.findById(id)
    videogame ? response.json(videogame) : response.status(404).json({ error: `Videogame with id ${id} not found` })
  } catch (error) { next(error) }
})

controller.get('/remaining/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const videogame = await Videogame.findById(id)

    const videogameDate = new Date(videogame.date)
    const currentDate = new Date()

    const timeDifference = currentDate.getTime() - videogameDate.getTime()
    const daysRemaining = timeDifference / (1000 * 3600 * 24)

    videogame
      ? response.json({
        title: videogame.title,
        image: videogame.image,
        days_remaining: parseInt(daysRemaining)
      })
      : response.status(404).json({ error: `Videogame with id ${id} not found` })
  } catch (error) { next(error) }
})

module.exports = controller
