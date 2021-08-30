const express = require('express')
const cors = require('cors')

const app = express()

require('dotenv').config()
require('./src/database/mongo')

app.use(cors())
app.use(express.json())
app.use('/image', express.static('image'))

const userRoute = '/user'

const createUserController = require('./src/controller/user/createUserController')
const getUserController = require('./src/controller/user/getUserController')

app.use(userRoute, createUserController)
app.use(userRoute, getUserController)

const loginRoute = '/login'

const loginController = require('./src/controller/user/login/loginController')

app.use(loginRoute, loginController)

const bookRoute = '/book'

const createBookController = require('./src/controller/book/createBookController')
const updateBookController = require('./src/controller/book/updateBookController')
const deleteBookController = require('./src/controller/book/deleteBookController')
const getBookController = require('./src/controller/book/getBookController')

app.use(bookRoute, createBookController)
app.use(bookRoute, updateBookController)
app.use(bookRoute, deleteBookController)
app.use(bookRoute, getBookController)

const movieRoute = '/movie'

const createMovieController = require('./src/controller/movie/createMovieController')
const updateMovieController = require('./src/controller/movie/updateMovieController')
const deleteMovieController = require('./src/controller/movie/deleteMovieController')
const getMovieController = require('./src/controller/movie/getMovieController')

app.use(movieRoute, createMovieController)
app.use(movieRoute, updateMovieController)
app.use(movieRoute, deleteMovieController)
app.use(movieRoute, getMovieController)

const videogameRoute = '/videogame'

const createVideogameController = require('./src/controller/videogame/createVideogameController')
const updateVideogameController = require('./src/controller/videogame/updateVideogameController')
const deleteVideogameController = require('./src/controller/videogame/deleteVideogameController')
const getVideogameController = require('./src/controller/videogame/getVideogameController')

app.use(videogameRoute, createVideogameController)
app.use(videogameRoute, updateVideogameController)
app.use(videogameRoute, deleteVideogameController)
app.use(videogameRoute, getVideogameController)

const notFound = require('./src/middleware/error/notFound')
const errorHandler = require('./src/middleware/error/errorHandler')

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
const server = app.listen(PORT, () => console.log(`Escuchando las peticiones en el puerto ${PORT}`))

module.exports = { app, server }
