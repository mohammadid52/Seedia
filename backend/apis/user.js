/* eslint-disable quotes */
const router = require('express').Router()
const auth = require('../middleware/verifyAuth')
const { responseMsg } = require('../utils')
var ObjectId = require('mongodb').ObjectId

require('dotenv').config()

const getUser = async (collection, id) => {
  const user = await collection.findOne({
    insertedId: id,
  })
  return user
}
// /user
router.post('/', auth, async (req, res) => {
  const token = req.user
  const usersCollection = res.locals.usersCollection

  const user = await getUser(usersCollection, token._id)

  if (user) {
    delete user.password
    return res
      .status(202)
      .json(responseMsg('success', 'Authentication successfully', user))
  } else {
    return res.status(403).json(responseMsg('error', 'Invalid user access'))
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  const usersCollection = res.locals.usersCollection

  const user = await usersCollection.findOne({
    _id: ObjectId(id),
  })

  if (user) {
    delete user.password
    return res
      .status(202)
      .json(responseMsg('success', 'Authentication successfully', user))
  } else {
    return res.status(403).json(responseMsg('error', 'Invalid user access'))
  }
})

// user/update
router.post('/update', auth, async (req, res) => {
  const usersCollection = res.locals.usersCollection
  const token = req.user
  const id = req.params.id

  const user = await getUser(usersCollection, token._id)
  console.log('🚀 ~ file: user.js ~ line 58 ~ router.post ~ user', user)

  const dataToUpdate = req.body

  if (user) {
    try {
      usersCollection.updateOne(
        { _id: user._id },
        { $set: { ...dataToUpdate } },
        { new: true }
      )

      delete user.password
      return res
        .status(202)
        .json(responseMsg('success', 'Data updated successfully', user))
    } catch (error) {
      return res.status(403).json(responseMsg('error', error.message))
    }
  } else {
    return res
      .status(403)
      .json(responseMsg('error', 'Cannot find user. Please check credentials'))
  }
})

module.exports = router
