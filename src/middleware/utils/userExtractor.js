const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  try {
    const auth = request.get('authorization')
    let token = ''
    if (auth && auth.toLowerCase().startsWith('bearer')) {
      token = auth.substring(7)
    }

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      response.status(401).json({ error: 'Token missing or invalid' })
    }

    const { id: userId } = decodedToken
    request.userId = userId

    next()
  } catch (error) {
    response.status(401).json(error)
  }
}
