const jwt = require('jsonwebtoken')
const { responseMsg } = require('../utils')

const auth = (req, res, next) => {
  let token = req.headers['authorization']

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json(responseMsg('error', err))
      }
      req.user = decoded

      next()
    })
  } else {
    return res
      .status(403)
      .json(responseMsg('error', '403. Unauthenticated. Token not found'))
  }
}

module.exports = auth
