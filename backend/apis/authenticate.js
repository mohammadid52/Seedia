/* eslint-disable quotes */
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!(email && password)) {
      res.status(400).send('All input is required')
    }
    const usersCollection = res.locals.usersCollection
    const user = await usersCollection.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.password)
      if (matched) {
        const token = jwt.sign(
          { user_id: user._id, email },
          'tradingpost13rms',
          {
            expiresIn: '60days',
          }
        )
        user.access_token = token

        return res.status(200).json(user)
      } else {
        return res.status(401).send('Invalid password or email')
      }
    } else {
      res.status(401).send("User don't exist. Please register")
    }
  } catch (error) {
    console.error(error)
  }
})
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body

    // if (!(email && password && firstName && lastName)) {
    //   res.status(400).send('All fields are required')
    // }
    const usersCollection = res.locals.usersCollection

    const alreadyExists = await usersCollection.findOne({ email })

    if (alreadyExists) {
      return res.status(409).send('User Already exits')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = {
      email: email.toLowerCase(),
      password: hashedPassword,
    }
    await usersCollection.insertOne(user)

    const token = jwt.sign({ user_id: user._id, email }, 'tradingpost13rms', {
      expiresIn: '60days',
    })
    user.access_token = token

    const responseMsg = (status = 'none', message = '', data = {}) => {
      return { status, message, data }
    }
    delete user.password

    return res
      .status(201)
      .json(responseMsg('success', 'Registered Successfully', user))
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
