/* eslint-disable quotes */
const app = require('express').Router()
const auth = require('../middleware/verifyAuth')
const {
  responseMsg,
  addObjectId,

  getItem,
  updateData,
} = require('../utils')

require('dotenv').config()
const uuid = require('uuid')

app.post('/add', auth, async (req, res) => {
  const token = req.user
  const { storeData } = req.body

  const { bannerImage, buttonLink, buttonLabel, products } = storeData

  let productsId = products.map((product) => product._id)

  // collection

  const usersCollection = res.locals.usersCollection

  if (bannerImage && buttonLink && buttonLabel && products) {
    const data = {
      bannerImage: bannerImage,
      buttonLink: buttonLink,
      buttonLabel: buttonLabel,
      products: productsId.map(addObjectId),
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

  const { image, title, content } = section

  // collection

  const usersCollection = res.locals.usersCollection

  if (image && title && content) {
    const newSectionData = {
      image: image,
      title: title,
      content: content,
      _id: uuid.v4(),
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
      .status(200)
      .json(responseMsg('success', 'Store changes made successfully', {}))
  }
})

module.exports = app
