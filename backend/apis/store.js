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
      _id: uuid.v4(),
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

module.exports = app
