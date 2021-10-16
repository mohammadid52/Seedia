const jwt = require('jsonwebtoken')
const { responseMsg } = require('../utils')

const auth = async (req, res, next) => {
  try {
    let token = req.headers['authorization']

    if (token) {
      jwt.verify(token.toString(), process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(403).json(responseMsg('error', err))
        } else {
          req.user = decoded
          next()
        }
      })
    } else {
      return res
        .status(403)
        .json(responseMsg('error', '403. Unauthenticated. Token not found'))
    }
  } catch (error) {
    console.error(error)
    return res.status(403).json(responseMsg('error', 'Something went wrong'))
  }
}

module.exports = auth
