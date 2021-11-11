/* eslint-disable quotes */
const router = require('express').Router()
const auth = require('../middleware/verifyAuth')
const { responseMsg, getItem, updateData } = require('../utils')
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
  const { reviewText, rating, reviewTitle } = req.body

  if (!productId) {
    return res.status(404).json(responseMsg('error', 'productId not found', {}))
  }

  // COLLECTIONS
  const productsCollection = res.locals.productsCollection
  const usersCollection = res.locals.usersCollection
  const reviewsCollection = res.locals.reviewsCollection

  const product = await getItem(productsCollection, productId)
  const user = await getItem(usersCollection, token.id)

  const newAddedReview = await reviewsCollection.insertOne({
    createdOn: new Date(),
    reviewText,
    reviewTitle: reviewTitle,
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
      const reviews =
        product?.reviews?.length > 0
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

      await updateData(productsCollection, productId, { reviews })
      await updateData(usersCollection, token.id, {
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
      })
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

router.post('/action', auth, async (req, res) => {
  const token = req.user
  // action must be 'like' or 'dislike'
  const { action = 'like', reviewId = '' } = req.query
  const reviewsCollection = res.locals.reviewsCollection

  try {
    const review = await getItem(reviewsCollection, reviewId)

    if (review) {
      let likes =
        review?.likes && review?.likes?.length > 0 ? [...review.likes] : []
      let dislikes =
        review?.dislikes && review?.dislikes?.length > 0
          ? [...review.dislikes]
          : []

      const likeIdx = likes.findIndex((d) => d === token.id)
      const dislikeIdx = dislikes.findIndex((d) => d === token.id)
      if (action === 'like') {
        // check if already liked or disliked
        // if liked, remove id from array
        // if disliked, remove id from disliked array and add in liked array

        if (likeIdx !== -1) {
          likes.splice(likeIdx, 1)
        } else {
          likes.push(token.id)
        }
        if (dislikeIdx !== -1) {
          dislikes.splice(dislikeIdx, 1)
        }
      } else {
        // check if already liked or disliked
        // if disliked, remove id from array
        // if liked, remove id from liked array and add in disliked array
        if (dislikeIdx !== -1) {
          dislikes.splice(dislikeIdx, 1)
        }
        if (likeIdx !== -1) {
          likes.splice(likeIdx, 1)
        } else {
          dislikes.push(token.id)
        }
      }

      console.log(likes, dislikes)
      await updateData(reviewsCollection, reviewId, { likes, dislikes })

      return res
        .status(202)
        .json(
          responseMsg(
            'success',
            'Review like/dislike action done successfully',
            review
          )
        )
    } else {
      return res
        .status(204)
        .json(responseMsg('error', 'Cannot find user or review data', {}))
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
