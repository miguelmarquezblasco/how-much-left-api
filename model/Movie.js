const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { model, Schema } = mongoose

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  image: { type: String, required: false, unique: false },
  date: { type: Date, required: true, unique: false },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

bookSchema.plugin(uniqueValidator)

const Movie = model('Movie', bookSchema)

module.exports = Movie
