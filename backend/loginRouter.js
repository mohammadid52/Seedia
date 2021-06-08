const jwt = require('jsonwebtoken')
//const bcrypt = require('bcrypt')

const loginRouter = require('express').Router()
const Users = require('./fakeusers')

loginRouter.post('/', async (request, response) => {
  const body = request.body

  const user = await Users.find(u => u.email === body.email)
  const passwordCorrect =
    !user
      ? false
      // : await bcrypt.compare(body.password, user.passwordHash) // for when we start using hashes
      : (user.password === body.password)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({ error: 'User or Password Invalid' })
  }

  const userForToken = {
    email: user.email,
    id: user.id,
  }

  // eslint-disable-next-line no-undef
  const token = jwt.sign(userForToken, 'process.env.SECRET', { expiresIn: '48h' })

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter