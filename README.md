# How Much Left - API

**How Much Left** es una aplicación a través de la cual podrás guardar tus libros, películas y videojuegos más esperados y saber de forma rápida y sencilla cuantos días quedan para su ansiado lanzamiento.

# Documentación

La API ha sido desarrollada con [Express.js](http://expressjs.com) y [Mongo DB](https://www.mongodb.com/es)

## Usuarios

### Crear un usuario [POST /user]

#### Header
~~~
Content-Type: application/json
~~~
#### Request
~~~
{
  username: String
  email: String
  password: String
}
~~~
#### Response [201]
~~~
{
  "username": String,
  "email": String,
  "books": Book[],
  "movies": Movie[],
  "videogames": Videogame[]
  "id": ObjectID
}
~~~

### Login [POST /login]

#### Header
~~~
Content-Type: application/json
~~~
#### Request
~~~
{
  "username": String,
  "password": String
}
~~~
#### Response [200]
~~~
{
  "username": String,
  "token": String
}
~~~

## Libros

### Crear un libro [POST /book]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Request
~~~
{
  "title": String,
  "image": String URL (optional),
  "date": Date
}
~~~
#### Response [201]
~~~
{
  "title": String,
  "image": String URL (optional),
  "date": Date,
  "user": ObjectID,
  "id": ObjectID
}
~~~

### Actualizar un libro [PUT /book/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Request
~~~
{
  "title": String (optional),
  "image": String URL (optional),
  "date": Date (optional)
}
~~~
#### Response [200]
~~~
{
  "title": String,
  "image": String URL,
  "date": Date,
  "user": ObjectID,
  "id": ObjectID
}
~~~

### Borrar un libro [DELETE /book/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [204]

### Obtener todos los libros [GET /book]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [200]
~~~
[
  {
    "title": String,
    "image": String URL,
    "date": Date,
    "user": ObjectID,
    "id": ObjectID
  }
]
~~~

### Obtener un libro [GET /book/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [200]
~~~
{
  "title": String,
  "image": String URL,
  "date": Date,
  "user": ObjectID,
  "id": ObjectID
}
~~~

### Obtener días que faltan para el lanzamientdo (date) de un libro [GET /book/remaining/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [200]
~~~
{
  "title": String,
  "image": String URL,
  "days_remaining": Integer
}
~~~

## Películas

### Crear una película [POST /movie]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Request
~~~
{
  "title": String,
  "image": String URL (optional),
  "date": Date
}
~~~
#### Response [201]
~~~
{
  "title": String,
  "image": String URL (optional),
  "date": Date,
  "user": ObjectID,
  "id": ObjectID
}
~~~

### Actualizar una película [PUT /movie/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Request
~~~
{
  "title": String (optional),
  "image": String URL (optional),
  "date": Date (optional)
}
~~~
#### Response [200]
~~~
{
  "title": String,
  "image": String URL,
  "date": Date,
  "user": ObjectID,
  "id": ObjectID
}
~~~

### Borrar una película [DELETE /movie/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [204]

### Obtener todas las películas [GET /movie]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [200]
~~~
[
  {
    "title": String,
    "image": String URL,
    "date": Date,
    "user": ObjectID,
    "id": ObjectID
  }
]
~~~

### Obtener una película [GET /movie/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [200]
~~~
{
  "title": String,
  "image": String URL,
  "date": Date,
  "user": ObjectID,
  "id": ObjectID
}
~~~

### Obtener días que faltan para el lanzamientdo (date) de una película [GET /movie/remaining/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [200]
~~~
{
  "title": String,
  "image": String URL,
  "days_remaining": Integer
}
~~~

## Videojuegos

### Crear un videojuego [POST /videogame]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Request
~~~
{
  "title": String,
  "image": String URL (optional),
  "date": Date
}
~~~
#### Response [201]
~~~
{
  "title": String,
  "image": String URL (optional),
  "date": Date,
  "user": ObjectID,
  "id": ObjectID
}
~~~

### Actualizar un videojuego [PUT /videogame/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Request
~~~
{
  "title": String (optional),
  "image": String URL (optional),
  "date": Date (optional)
}
~~~
#### Response [200]
~~~
{
  "title": String,
  "image": String URL,
  "date": Date,
  "user": ObjectID,
  "id": ObjectID
}
~~~

### Borrar un videojuego [DELETE /videogame/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [204]

### Obtener todos los videojuegos [GET /videogame]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [200]
~~~
[
  {
    "title": String,
    "image": String URL,
    "date": Date,
    "user": ObjectID,
    "id": ObjectID
  }
]
~~~

### Obtener un videojuego [GET /videogame/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [200]
~~~
{
  "title": String,
  "image": String URL,
  "date": Date,
  "user": ObjectID,
  "id": ObjectID
}
~~~

### Obtener días que faltan para el lanzamientdo (date) de un videojuego [GET /videogame/remaining/:id]

#### Header
~~~
Content-Type: application/json
Authentication: Bearer :token
~~~
#### Response [200]
~~~
{
  "title": String,
  "image": String URL,
  "days_remaining": Integer
}
~~~
