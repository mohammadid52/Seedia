const path = require('path')
const express = require('express')
const cors = require('cors')
const loginRouter = require('./loginRouter')
const mongodb = require('mongodb')
const authenticationRouter = require('./apis/authenticate')
const app = express()
const bodyParser = require('body-parser')
const client = mongodb.MongoClient

const URI = 'mongodb://localhost:27017/'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())

client.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    console.error(err)
    const db = client.db('13rms')
    const usersCollection = db.collection('users')

    // app.use('/login', loginRouter)

    const passData = async (req, res, next) => {
      res.locals.usersCollection = usersCollection
      next()
    }

    app.get('/test', async (req, res) => {
      const users = await usersCollection.find({}).toArray()
      res.json(users)
    })

    app.use('/auth', passData, authenticationRouter)

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
