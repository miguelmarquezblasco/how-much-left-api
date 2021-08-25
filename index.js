const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let books = [
  {
    id: 1,
    title: '1984',
    date: ''
  },
  {
    id: 2,
    title: 'La milla verde',
    date: ''
  },
  {
    id: 3,
    title: 'La catedral del mar',
    date: ''
  }
]

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/book/:id', (req, res) => {
  const id = Number(req.params.id)
  const book = books.find(book => book.id === id)

  book ? res.json(book) : res.status(404).end()
})

app.delete('/book/:id', (req, res) => {
  const id = Number(req.params.id)
  books = books.filter(book => book.id !== id)

  res.status(204).end()
})

app.post('/book', (req, res) => {
  const book = req.body

  if (!book || !book.title) {
    res.status(400).json({ error: 'Missing book' })
  }

  const ids = books.map(book => book.id)
  const maxId = Math.max(...ids)

  const newBook = {
    id: maxId + 1,
    title: book.title,
    date: new Date().toISOString()
  }

  res.status(201).json(newBook)
})

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Escuchando las peticiones en el puerto ${PORT}`)
})
