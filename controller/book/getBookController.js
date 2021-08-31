const controller = require('express').Router()
const Book = require('../../model/Book')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.get('/', userExtractor, async (request, response, next) => {
  try {
    const books = await Book.find({})
    response.json(books.length > 0 ? books : [])
  } catch (error) { next(error) }
})

controller.get('/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const book = await Book.findById(id)
    book ? response.json(book) : response.status(404).json({ error: `Book with id ${id} not found` })
  } catch (error) { next(error) }
})

controller.get('/remaining/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const book = await Book.findById(id)

    const bookDate = new Date(book.date)
    const currentDate = new Date()

    const timeDifference = bookDate.getTime() - currentDate.getTime()
    const daysRemaining = timeDifference / (1000 * 3600 * 24)

    book
      ? response.json({
        title: book.title,
        image: book.image,
        days_remaining: parseInt(daysRemaining)
      })
      : response.status(404).json({ error: `Book with id ${id} not found` })
  } catch (error) { next(error) }
})

module.exports = controller
