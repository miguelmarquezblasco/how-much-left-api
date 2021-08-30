const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { model, Schema } = mongoose

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  email: { type: String, index: true, unique: true, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
  videogames: [{ type: Schema.Types.ObjectId, ref: 'Videogame' }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

userSchema.plugin(uniqueValidator)

const User = model('User', userSchema)

module.exports = User
