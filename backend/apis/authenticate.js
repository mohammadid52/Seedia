/* eslint-disable quotes */
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { responseMsg } = require('../utils')

require('dotenv').config()

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: '10days' }
  )
}

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!(email && password)) {
      res.status(400).json(responseMsg('error', 'All input is required'))
    }
    const usersCollection = res.locals.usersCollection
    const user = await usersCollection.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.password)
      if (matched) {
        const token = generateToken({ ...user, id: user._id })
        user.access_token = token

        return res
          .status(200)
          .json(responseMsg('success', 'Logged In Successfully', user))
      } else {
        return res
          .status(401)
          .json(responseMsg('error', 'Invalid password or email'))
      }
    } else {
      res
        .status(401)
        .json(responseMsg('error', "User don't exist. Please register"))
    }
  } catch (error) {
    console.error(error)
  }
})
router.post('/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, ...otherData } = req.body

    if (!(email && password && firstName && lastName)) {
      res.status(400).json(responseMsg('error', 'Please add all fields'))
    }
    const usersCollection = res.locals.usersCollection

    const alreadyExists = await usersCollection.findOne({ email })

    if (alreadyExists) {
      return res.status(409).json(responseMsg('error', 'User Already Exists'))
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = {
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: hashedPassword,
      ...otherData,
    }
    const _user = await usersCollection.insertOne(user)

    const token = generateToken({ ...user, id: _user.insertedId })

    user.access_token = token

    delete user.password

    return res
      .status(201)
      .json(responseMsg('success', 'Registered Successfully', user))
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
