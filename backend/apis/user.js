/* eslint-disable quotes */
const router = require('express').Router()
const auth = require('../middleware/verifyAuth')
const { responseMsg } = require('../utils')

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

// user/update
router.post('/update', auth, async (req, res) => {
  const usersCollection = res.locals.usersCollection
  const token = req.user

  const dataToUpdate = req.body
  const user = await getUser(usersCollection, token._id)

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
