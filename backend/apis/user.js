/* eslint-disable quotes */
const router = require('express').Router()
const auth = require('../middleware/verifyAuth')
const { responseMsg } = require('../utils')
var ObjectId = require('mongodb').ObjectId

require('dotenv').config()

// /user
router.post('/', auth, async (req, res) => {
  const token = req.user

  const usersCollection = res.locals.usersCollection

  const user = await usersCollection.findOne({ _id: ObjectId(token.id) })

  if (user) {
    delete user.password
    return res
      .status(202)
      .json(responseMsg('success', 'Authentication successfully', user))
  } else {
    return res.status(403).json(responseMsg('error', 'Invalid user access'))
  }
})

// /user
router.post('/getUsers', auth, async (req, res) => {
  const arrayOfId = req.body.users

  const usersCollection = res.locals.usersCollection

  const wrapid = arrayOfId.map((id) => ObjectId(id))

  try {
    const user = await usersCollection.find({ _id: { $in: wrapid } }).toArray()

    if (user) {
      return res
        .status(202)
        .json(responseMsg('success', 'Fetch successfully', user))
    } else {
      return res.status(403).json(responseMsg('error', "Can't find user"))
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(responseMsg('error', 'Error', error.message))
  }
})
// /user
router.post('/suggestedUser', auth, async (req, res) => {
  const interests = req.body.interests

  const usersCollection = res.locals.usersCollection
  const interestsName = interests.map((i) => i.name)
  try {
    const list = await usersCollection
      .find({ background: { interests: { name: { $in: interestsName } } } })
      .toArray()

    if (list) {
      return res
        .status(202)
        .json(responseMsg('success', 'Fetch successfully', list))
    } else {
      return res.status(403).json(responseMsg('error', "Can't find user"))
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(responseMsg('error', 'Error', error.message))
  }
})
// /user
router.post('/getAll', auth, async (req, res) => {
  const limit = req.body.limit

  const usersCollection = res.locals.usersCollection
  const token = req.user

  try {
    const list = await usersCollection
      .find({ _id: { $not: { $eq: ObjectId(token.id) } } })
      .limit(limit)
      .toArray()

    if (list) {
      return res
        .status(202)
        .json(responseMsg('success', 'Fetch successfully', list))
    } else {
      return res.status(403).json(responseMsg('error', "Can't find user"))
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(responseMsg('error', 'Error', error.message))
  }
})

router.post('/getById/:id', auth, async (req, res) => {
  const id = req.params.id
  const token = req.user

  const usersCollection = res.locals.usersCollection

  try {
    const user = await usersCollection.findOne({ _id: ObjectId(id) })

    // People who viewed profile
    const checkCurrentId = (pwvp = [], _id = '') => {
      // skip if the owner is looking his own profile
      if (_id === id) {
        return true
      } else {
        return pwvp.includes(_id)
      }
    }
    const me = await usersCollection.findOne({ _id: ObjectId(token.id) })

    if (me) {
      // People i viewed
      const piv =
        me.piv && me.piv.length > 0
          ? checkCurrentId(me.piv, id)
            ? [...me.piv]
            : [...me.piv, id]
          : [id]
      const pivCount = piv.length
      delete user.password

      await usersCollection.updateOne(
        { _id: me._id },
        { $set: { piv, pivCount } },
        { new: true }
      )
    }

    if (user) {
      const pwvp =
        user.pwvp && user.pwvp.length > 0
          ? checkCurrentId(user.pwvp, token.id)
            ? [...user.pwvp]
            : [...user.pwvp, token.id]
          : [token.id]
      const pwvpCount = pwvp.length
      delete user.password
      await usersCollection.updateOne(
        { _id: user._id },
        { $set: { pwvp, pwvpCount } },
        { new: true }
      )
      return res
        .status(202)
        .json(responseMsg('success', 'Authentication successfully', user))
    } else {
      return res.status(403).json(responseMsg('error', 'No user found'))
    }
  } catch (error) {
    console.error(error.message)
  }
})

// user/update
router.post('/update', auth, async (req, res) => {
  const token = req.user

  const usersCollection = res.locals.usersCollection

  const dataToUpdate = req.body

  try {
    const user = await usersCollection.findOne({ _id: ObjectId(token.id) })

    if (user) {
      try {
        delete dataToUpdate._id
        await usersCollection.updateOne(
          { _id: user._id },
          { $set: { ...dataToUpdate } },
          { new: true }
        )

        delete user.password
        return res.status(202).json(
          responseMsg('success', 'Data updated successfully', {
            ...dataToUpdate,
          })
        )
      } catch (error) {
        return res.status(403).json(responseMsg('error', error.message))
      }
    } else {
      return res
        .status(403)
        .json(
          responseMsg('error', 'Cannot find user. Please check credentials')
        )
    }
  } catch (error) {
    console.error(error.message)
    return res.status(403)
  }
})

module.exports = router
