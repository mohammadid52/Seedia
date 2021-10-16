/* eslint-disable quotes */
const router = require('express').Router()
const auth = require('../middleware/verifyAuth')
const { responseMsg } = require('../utils')
var ObjectId = require('mongodb').ObjectId
require('dotenv').config()

// ====================================================== //
// ======================QUERIES======================= //
// ====================================================== //

router.post('/r/:productId', auth, async (req, res) => {
  const productId = req.params.productId

  const { limit = 10, skip = 0, idArray } = req.body

  // COLLECTIONS
  const reviewsCollection = res.locals.reviewsCollection
  const usersCollection = res.locals.usersCollection

  const userWrapId = idArray.map((obj) => ObjectId(obj.userId))

  const reviewWrapId = idArray.map((obj) => ObjectId(obj.reviewId))

  try {
    const users = await usersCollection
      .find({ _id: { $in: userWrapId } })
      .toArray()

    const reviews = await reviewsCollection
      .find({
        $and: [
          { _id: { $in: reviewWrapId } },
          { productId: ObjectId(productId) },
        ],
      })
      .skip(skip)
      .limit(limit)
      .toArray()
    if (reviews && reviews.length > 0 && users && users.length > 0) {
      const mapTogether = reviews.map((review) => ({
        ...review,
        user: users.find(
          (user) => user._id.toString() === review.userId.toString()
        ),
      }))

      return res
        .status(202)
        .json(
          responseMsg('success', 'Reviews fetched successfully', mapTogether)
        )
    } else {
      return res
        .status(204)
        .json(responseMsg('error', 'Cannot fetch reviews.', {}))
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

router.post('/add/:productId', auth, async (req, res) => {
  const productId = req.params.productId
  const token = req.user
  const { reviewText, rating } = req.body

  if (!productId) {
    return res.status(404).json(responseMsg('error', 'productId not found', {}))
  }

  // COLLECTIONS
  const productsCollection = res.locals.productsCollection
  const usersCollection = res.locals.usersCollection
  const reviewsCollection = res.locals.reviewsCollection

  const product = await productsCollection.findOne({
    _id: ObjectId(productId),
  })
  const user = await usersCollection.findOne({ _id: ObjectId(token.id) })

  // const reviewWrapId = product?.reviews.map((obj) => ObjectId(obj.reviewId))

  // const reviewsForCurrentProduct = await reviewsCollection
  //   .find({
  //     $and: [
  //       { _id: { $in: reviewWrapId } },
  //       { productId: ObjectId(productId) },
  //     ],
  //   })
  //   .toArray()

  const newAddedReview = await reviewsCollection.insertOne({
    createdOn: new Date(),
    reviewText,
    rating,
    userId: ObjectId(user._id),
    likes: [],
    dislikes: [],
    productId: ObjectId(productId),
  })

  // add review id to user.reviews array
  // add review id to product.reviews array
  // create new doc in reviews collection

  try {
    if (product && user && newAddedReview) {
      await usersCollection.updateOne(
        { _id: ObjectId(token.id) },
        {
          $set: {
            reviews:
              user?.reviews?.length > 0
                ? [
                    ...user.reviews,
                    {
                      productId: ObjectId(productId),
                      reviewId: newAddedReview.insertedId,
                    },
                  ]
                : [
                    {
                      productId: ObjectId(productId),
                      reviewId: newAddedReview.insertedId,
                    },
                  ],
          },
        },
        { new: true }
      )

      const reviews =
        product?.length > 0
          ? [
              ...product.reviews,
              {
                userId: ObjectId(user._id),
                reviewId: newAddedReview.insertedId,
              },
            ]
          : [
              {
                userId: ObjectId(user._id),
                reviewId: newAddedReview.insertedId,
              },
            ]

      // const totalRating = reviewsForCurrentProduct.reduce(
      //   (tot, r) => r.rating + tot,
      //   0
      // )

      // const averageRating = totalRating / reviews.length
      await productsCollection.updateOne(
        { _id: ObjectId(productId) },
        {
          $set: {
            productId: ObjectId(productId),
            // rating: {
            //   averageRating: averageRating,
            //   count: reviews.length,
            // },
            reviews: reviews,
          },
        },
        { new: true }
      )
      return res
        .status(202)
        .json(responseMsg('success', 'Review added successfully', {}))
    } else {
      return res
        .status(204)
        .json(responseMsg('error', 'Cannot fetch reviews.', {}))
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

module.exports = router
