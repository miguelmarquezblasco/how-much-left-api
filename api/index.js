const express = require('express')
const cors = require('cors')

const app = express()

require('dotenv').config()
require('../database/mongo')

app.use(cors())
app.use(express.json())
app.use('/image', express.static('image'))

const userRoute = '/user'

const createUserController = require('../controller/user/createUserController')

app.use(userRoute, createUserController)

const loginRoute = '/login'

const loginController = require('../controller/user/login/loginController')

app.use(loginRoute, loginController)

const bookRoute = '/book'

const createBookController = require('../controller/book/createBookController')
const updateBookController = require('../controller/book/updateBookController')
const deleteBookController = require('../controller/book/deleteBookController')
const getBookController = require('../controller/book/getBookController')

app.use(bookRoute, createBookController)
app.use(bookRoute, updateBookController)
app.use(bookRoute, deleteBookController)
app.use(bookRoute, getBookController)

const movieRoute = '/movie'

const createMovieController = require('../controller/movie/createMovieController')
const updateMovieController = require('../controller/movie/updateMovieController')
const deleteMovieController = require('../controller/movie/deleteMovieController')
const getMovieController = require('../controller/movie/getMovieController')

app.use(movieRoute, createMovieController)
app.use(movieRoute, updateMovieController)
app.use(movieRoute, deleteMovieController)
app.use(movieRoute, getMovieController)

const videogameRoute = '/videogame'

const createVideogameController = require('../controller/videogame/createVideogameController')
const updateVideogameController = require('../controller/videogame/updateVideogameController')
const deleteVideogameController = require('../controller/videogame/deleteVideogameController')
const getVideogameController = require('../controller/videogame/getVideogameController')

app.use(videogameRoute, createVideogameController)
app.use(videogameRoute, updateVideogameController)
app.use(videogameRoute, deleteVideogameController)
app.use(videogameRoute, getVideogameController)

const notFound = require('../middleware/error/notFound')
const errorHandler = require('../middleware/error/errorHandler')

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
const server = app.listen(PORT, () => console.log(`Escuchando las peticiones en el puerto ${PORT}`))

module.exports = { app, server }
