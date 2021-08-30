const controller = require('express').Router()
const Book = require('../../model/Book')
const userExtractor = require('../../middleware/utils/userExtractor')

controller.put('/:id', userExtractor, async (request, response, next) => {
  const book = request.body

  const updatedBook = {
    title: book.title,
    image: book.image
  }

  try {
    const newBook = await Book.findByIdAndUpdate(request.params.id, updatedBook, { new: true })
    response.json(newBook)
  } catch (error) { next(error) }
})

module.exports = controller
