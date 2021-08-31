const controller = require('express').Router()
const Videogame = require('../../model/Videogame')
const User = require('../../model/User')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.post('/', userExtractor, async (request, response, next) => {
  const { title, image, date } = request.body
  const { userId } = request

  try {
    const user = await User.findById(userId)

    if (!title || !date) {
      response.status(400).json({ error: 'Required parameter missing' })
    }

    const newVideogame = new Videogame({
      title: title,
      image: image,
      date: date,
      user: user._id
    })

    const savedVideogame = await newVideogame.save()

    user.books = user.books.concat(savedVideogame._id)

    await user.save()

    response.status(201).json(savedVideogame)
  } catch (error) { next(error) }
})

module.exports = controller
