const path = require('path')
const express = require('express')
const cors = require('cors')

const mongodb = require('mongodb')
const authenticationRouter = require('./apis/authenticate')
const mediaUploadRouter = require('./apis/mediaUpload')
const userRouter = require('./apis/user')
const mailRouter = require('./apis/mail')
const app = express()
const bodyParser = require('body-parser')

const client = mongodb.MongoClient

const URI = 'mongodb://localhost:27017/'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())
require('dotenv').config()

client.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    const db = client.db('13rms')
    const usersCollection = db.collection('users')

    const passUserCollection = async (req, res, next) => {
      res.locals.usersCollection = usersCollection
      next()
    }

    app.use('/user', passUserCollection, userRouter)
    app.use('/send-mail', mailRouter)

    app.use('/auth', passUserCollection, authenticationRouter)

    app.use('/uploadImage', mediaUploadRouter)

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
  }
)

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'build', 'static')))

// ~~~~~~~~~~~~~~~~~~IGNORE THIS~~~~~~~~~~~~~~~~~~~~~ //

app.listen(3005, () => {
  console.log('API Server running on 3005')
})
