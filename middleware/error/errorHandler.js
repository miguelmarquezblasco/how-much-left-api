const ERROR_HANDLERS = {
  CastError: 400,
  JsonWebTokenError: 401,
  TokenExpirerError: 401,
  ValidationError: 409,
  default: 500
}

module.exports = (error, request, response, next) => {
  const errorCode = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.default
  if (errorCode === ERROR_HANDLERS.default) {
    console.log(error.message)
    response.status(errorCode).end()
  }

  response.status(errorCode).send({ error: error.message })
}
