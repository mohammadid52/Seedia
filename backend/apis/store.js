/* eslint-disable quotes */
const app = require('express').Router()
const auth = require('../middleware/verifyAuth')
const {
  responseMsg,
  addObjectId,

  getItem,
  updateData,
  getManyItems,
} = require('../utils')

const asyncLoop = require('node-async-loop')

require('dotenv').config()
const uuid = require('uuid')
var ObjectId = require('mongodb').ObjectId

app.post('/add', auth, async (req, res) => {
  const token = req.user
  const { storeData } = req.body

  const { bannerImage, buttonLink, buttonLabel } = storeData

  const usersCollection = res.locals.usersCollection

  if (bannerImage && buttonLink && buttonLabel) {
    const data = {
      bannerImage: bannerImage,
      buttonLink: buttonLink,
      buttonLabel: buttonLabel,
      createdBy: token.id,
      createdOn: new Date(),
      isPublished: false,
      _id: uuid.v4(),
      section: [],
    }

    const user = await getItem(usersCollection, token.id)
    if (user) {
      await updateData(usersCollection, token.id, {
        store: data,
      })
      return res
        .status(200)
        .json(responseMsg('success', 'New store added successfully', data))
    }
  } else {
    return res.status(404).json(responseMsg('error', 'missing data', {}))
  }
})
app.post('/section-add', auth, async (req, res) => {
  const token = req.user
  const { section } = req.body

  const { image, title, content, products } = section

  // collection

  const usersCollection = res.locals.usersCollection

  if (image && title && content) {
    const newSectionData = {
      image: image,
      title: title,
      content: content,
      _id: uuid.v4(),
      products: products,
    }

    const user = await getItem(usersCollection, token.id)
    if (user) {
      let updatedSection = user?.store.section
        ? [...user?.store?.section, newSectionData]
        : [newSectionData]
      await updateData(usersCollection, token.id, {
        store: {
          ...user.store,
          section: updatedSection,
        },
      })
      return res
        .status(200)
        .json(
          responseMsg(
            'success',
            'New section added successfully',
            newSectionData
          )
        )
    }
  } else {
    return res.status(404).json(responseMsg('error', 'missing data', {}))
  }
})
app.post('/publish', auth, async (req, res) => {
  const token = req.user
  const { action = 'publish' } = req.query

  // collection

  const usersCollection = res.locals.usersCollection

  const user = await getItem(usersCollection, token.id)
  if (user) {
    await updateData(usersCollection, token.id, {
      store: {
        ...user.store,
        isPublished: action === 'public',
      },
    })
    return res
      .status(202)
      .json(responseMsg('success', 'Store changes made successfully', {}))
  }
})
app.get('/store-products', auth, async (req, res) => {
  const { userId } = req.query

  // collection

  const usersCollection = res.locals.usersCollection
  const productsCollection = res.locals.productsCollection
  try {
    const user = await getItem(usersCollection, ObjectId(userId))
    const store = user?.store

    if (store && store?.section) {
      let newSections = []

      asyncLoop(
        store?.section,
        async (section, next) => {
          if (section?.products?.length > 0) {
            const products = await getManyItems(productsCollection, {
              _id: { $in: section.products.map(addObjectId) },
            })
            newSections.push({
              ...section,
              products: products,
            })
            next()
          } else {
            newSections.push({
              ...section,
              products: [],
            })
            next()
          }
        },
        async () => {
          return res.status(202).json(
            responseMsg('success', 'Products added to store', {
              ...store,
              section: newSections,
            })
          )
        }
      )
    } else {
      return res.status(404).json(responseMsg('error', 'Cannot find store', {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(404)
      .json(responseMsg('error', 'Something went wrong', error.message))
  }
})

module.exports = app
