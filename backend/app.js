const path = require('path')
const express = require('express')
const cors = require('cors')

const mongodb = require('mongodb')
const authenticationRouter = require('./apis/authenticate')
const mediaUploadRouter = require('./apis/mediaUpload')
const userRouter = require('./apis/user')
const productsRouter = require('./apis/products')
const reviewsRouter = require('./apis/reviews')
const projectRouter = require('./apis/project')
const requestsRouter = require('./apis/requests')
const groupsRouter = require('./apis/groups')
const postRouter = require('./apis/posts')
const storeRouter = require('./apis/store')

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
    const productsCollection = db.collection('products')
    const reviewsCollection = db.collection('reviews')
    const projectsCollection = db.collection('projects')
    const requestsCollection = db.collection('requests')
    const groupsCollection = db.collection('groups')
    const postCollection = db.collection('posts')

    const passUserCollection = async (req, res, next) => {
      res.locals.usersCollection = usersCollection
      next()
    }
    const passProductsCollection = (req, res, next) => {
      res.locals.productsCollection = productsCollection
      res.locals.reviewsCollection = reviewsCollection
      next()
    }

    const passProjectsCollection = (req, res, next) => {
      res.locals.projectsCollection = projectsCollection
      next()
    }

    const passRequestsCollection = (req, res, next) => {
      res.locals.requestsCollection = requestsCollection
      next()
    }
    const passGroupsCollection = (req, res, next) => {
      res.locals.groupsCollection = groupsCollection
      next()
    }
    const passPostCollection = (req, res, next) => {
      res.locals.postCollection = postCollection
      next()
    }

    app.use('/user', passUserCollection, userRouter)
    app.use(
      '/project',
      passUserCollection,
      passProjectsCollection,
      projectRouter
    )
    app.use(
      '/products',
      passUserCollection,
      passProductsCollection,
      productsRouter
    )
    app.use(
      '/reviews',
      passUserCollection,
      passProductsCollection,
      reviewsRouter
    )
    app.use(
      '/requests',
      passUserCollection,
      passRequestsCollection,
      requestsRouter
    )
    app.use('/groups', passUserCollection, passGroupsCollection, groupsRouter)
    app.use('/post', passUserCollection, passPostCollection, postRouter)
    app.use('/store', passUserCollection, passPostCollection, storeRouter)

    app.use('/auth', passUserCollection, authenticationRouter)

    app.use('/uploadImage', mediaUploadRouter)

    console.log('Connected')
  }
)

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'build', 'static')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// ~~~~~~~~~~~~~~~~~~IGNORE THIS~~~~~~~~~~~~~~~~~~~~~ //

const PORT = 3005

app.listen(PORT, () => {
  console.log(`API Server running on ${PORT}`)
})
