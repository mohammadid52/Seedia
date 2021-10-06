/* eslint-disable quotes */
const router = require('express').Router()
const auth = require('../middleware/verifyAuth')
const { responseMsg } = require('../utils')
var ObjectId = require('mongodb').ObjectId
require('dotenv').config()
const { nanoid } = require('nanoid')

// ====================================================== //
// ======================QUERIES======================= //
// ====================================================== //

router.get('/postedBy/:userId', auth, async (req, res) => {
  const userId = req.params.userId
  const productsCollection = res.locals.productsCollection
  const products = await productsCollection
    .find({ postedBy: ObjectId(userId) })
    .toArray()

  try {
    if (products && products.length) {
      return res
        .status(202)
        .json(responseMsg('success', 'Products fetched successfully', products))
    } else {
      return res
        .status(204)
        .json(responseMsg('error', 'Cannot fetch products.', {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(204)
      .json(
        responseMsg('error', 'Oops! Something went wrong. Please try again', {})
      )
  }
})

router.get('/:productId', auth, async (req, res) => {
  const token = req.user
  const { productId } = req.params
  const usersCollection = res.locals.usersCollection
  const productsCollection = res.locals.productsCollection

  // first check if the token.id exists in products collection or not
  // if yes then add it to products collection
  // else create new doc and add it to products collection

  // add token id to products collection to track views and interests

  const product = await productsCollection.findOne({
    _id: ObjectId(productId),
  })

  const user = await usersCollection.findOne({
    _id: ObjectId(token.id),
  })

  const getUniqProductsViewedList = () => {
    const productId = ObjectId(product._id)
    const productsViewed = user?.productsViewed || []
    // that's my product
    // this will go in user.business object
    if (
      !user?.business?.products?.find(
        (d) => d.toString() === product._id.toString()
      )
    ) {
      if (productsViewed.length > 0) {
        const alreadyExists = productsViewed.find(
          (d) => d.toString() === product._id.toString()
        )

        if (alreadyExists) {
          return [...productsViewed]
        } else {
          return [...productsViewed, productId]
        }
      } else {
        return [productId]
      }
    } else {
      return [...productsViewed]
    }
  }

  // this will go in product object
  const getUniqUsersViewedList = () => {
    const userId = ObjectId(token.id)
    const usersViewed = product?.usersViewed || []
    // that's my product
    if (token.id !== product.postedBy.toString()) {
      if (usersViewed.length > 0) {
        const alreadyExists = usersViewed.find((d) => d.toString() === token.id)
        if (alreadyExists) {
          return [...usersViewed]
        } else {
          return [...usersViewed, userId]
        }
      } else {
        return [userId]
      }
    } else {
      return [...usersViewed]
    }
  }

  try {
    if (product && user) {
      await usersCollection.updateOne(
        { _id: ObjectId(token.id) },
        {
          $set: {
            productsViewed: getUniqProductsViewedList(),
          },
        },
        { new: true }
      )
      await productsCollection.updateOne(
        { _id: ObjectId(product._id) },
        {
          $set: {
            usersViewed: getUniqUsersViewedList(),
          },
        },
        { new: true }
      )
      return res
        .status(202)
        .json(responseMsg('success', 'Product fetched successfully', product))
    } else {
      return res
        .status(204)
        .json(
          responseMsg(
            'error',
            'Cannot find product. Maybe the product is currently unavailable',
            {}
          )
        )
    }
  } catch (error) {
    console.error(error)
    return res
      .status(204)
      .json(
        responseMsg('error', 'Oops! Something went wrong. Please try again', {})
      )
  }
})

// ====================================================== //
// ======================MUTATIONS======================= //
// ====================================================== //

router.post('/add', auth, async (req, res) => {
  const token = req.user
  const { newProductData } = req.body

  if (
    !(
      newProductData.productName ||
      newProductData.productPrice ||
      newProductData.productDescription ||
      newProductData.availableColors ||
      newProductData.estimatedDelivery ||
      newProductData.tags
    )
  ) {
    return res
      .status(204)
      .json(responseMsg('error', 'Please add all required fields', {}))
  } else {
    const productsCollection = res.locals.productsCollection
    const usersCollection = res.locals.usersCollection

    // first check if the token.id exists in products collection or not
    // if yes then add it to products collection
    // else create new doc and add it to products collection

    const user = await usersCollection.findOne({ _id: ObjectId(token.id) })

    try {
      const data = {
        images: [
          {
            id: nanoid(6),
            isCover: true,
            url: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
          },
          {
            id: nanoid(6),

            isCover: false,
            url: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
          },
          {
            id: nanoid(6),

            isCover: false,
            url: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
          },
          {
            id: nanoid(6),

            isCover: false,
            url: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
          },
        ],
        postedBy: ObjectId(token.id),
        ...newProductData,
      }
      const product = await productsCollection.insertOne(data)
      if (user) {
        await usersCollection.updateOne(
          { _id: ObjectId(user._id) },
          {
            $set: {
              business: {
                ...user.business,
                products:
                  user?.products?.length > 0
                    ? [...user.products]
                    : [product.insertedId],
              },
            },
          },
          { new: true }
        )
        return res
          .status(202)
          .json(responseMsg('success', 'Product added successfully', {}))
      } else {
      }
    } catch (error) {
      console.error(error)
      return res
        .status(204)
        .json(
          responseMsg(
            'error',
            'Oops! Something went wrong. Please try again',
            {}
          )
        )
    }
  }
})

module.exports = router
