/* eslint-disable quotes */
const router = require('express').Router()
const auth = require('../middleware/verifyAuth')
const {
  responseMsg,
  shortUser,
  unique,
  addObjectId,
  getManyItems,
} = require('../utils')
var ObjectId = require('mongodb').ObjectId
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const faker = require('faker')
const { nanoid } = require('nanoid')
require('dotenv').config()

const generateToken = (code) => {
  return jwt.sign(
    {
      code,
    },
    `${process.env.SECRET_KEY}_verification_code`,
    { expiresIn: '5min' }
  )
}

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
    return res.status(203).json(responseMsg('error', 'Invalid user access'))
  }
})

// /user
router.post('/generateCode', async (req, res) => {
  try {
    let number = ''
    for (let i = 0; i <= 5; i++) {
      const num = Math.floor(Math.random() * 9) + 1
      number = number + num.toString()
    }

    if (number) {
      const token = generateToken(number)
      return res.status(202).json(
        responseMsg('success', 'Code generated successfully', {
          token,
          code: number,
        })
      )
    }
  } catch (error) {
    return res.status(202).json(responseMsg('error', error.message))
  }
})
// /user
router.post('/updatePassword/:token', async (req, res) => {
  const usersCollection = res.locals.usersCollection
  const token = req.params.token
  const newPassword = req.body.newPassword
  try {
    const user = await usersCollection.findOne({
      resetPasswordToken: token,
    })
    if (user) {
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      await usersCollection.updateOne(
        { _id: user?._id },
        { $set: { password: hashedPassword } },
        { $unset: { resetPasswordToken: '', resetPasswordExpires: '' } },
        { new: true }
      )
      return res.status(202).json(responseMsg('success', ''))
    } else {
      return res.status(202).json(responseMsg('error', 'User not found'))
    }
  } catch (error) {
    return res.status(202).json(responseMsg('error', error.message))
  }
})

router.post('/verifyEmail', async (req, res) => {
  const usersCollection = res.locals.usersCollection
  const userEmail = req.body.email

  try {
    const user = await usersCollection.findOne({ email: userEmail })

    if (user) {
      let resetPasswordToken = crypto.randomBytes(20).toString('hex')
      let resetPasswordExpires = Date.now() + 3600000 //expires in an hour
      const link =
        process.env.REACT_APP_BASE_URL + '/reset-password/' + resetPasswordToken
      await usersCollection.updateOne(
        { _id: user?._id },
        { $set: { resetPasswordToken, resetPasswordExpires } },
        { new: true }
      )
      return res.status(202).json(
        responseMsg('success', 'Email verified. Sending reset email', {
          verified: true,
          link,
          expiresIn: resetPasswordExpires,
        })
      )
    } else {
      return res
        .status(203)
        .json(
          responseMsg(
            'error',
            'Email address is not verified. Please check your email address.',
            { verified: false }
          )
        )
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(
      responseMsg(
        'error',
        `Something went wrong. Please try again. Error code: ${error.message}`,
        {
          verified: false,
        }
      )
    )
  }
})

router.post('/verifyResetToken/:token', async (req, res) => {
  const usersCollection = res.locals.usersCollection
  const token = req.params.token

  try {
    const user = await usersCollection.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    })

    if (user) {
      return res.status(202).json(
        responseMsg('success', 'Token verified', {
          success: true,
        })
      )
    } else {
      return res.status(203).json(
        responseMsg('error', 'Invalid token url or the link is expired.', {
          success: false,
        })
      )
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(
      responseMsg(
        'error',
        `Something went wrong. Please try again. Error ${error.message}`,
        {
          success: false,
        }
      )
    )
  }
})

router.post('/verifyCode', async (req, res) => {
  try {
    const fromUser = req.body.code
    const token = req.body.token

    if (token) {
      jwt.verify(
        token,
        `${process.env.SECRET_KEY}_verification_code`,
        (err, decoded) => {
          if (err) {
            return res.status(403).json(responseMsg('error', err))
          }
          if (decoded && decoded.code === fromUser) {
            return res
              .status(202)
              .json(responseMsg('success', 'Code verified', { verified: true }))
          } else {
            return res.status(202).json(
              responseMsg('error', 'Invalid verification code', {
                verified: false,
              })
            )
          }
        }
      )
    } else {
      return res
        .status(202)
        .json(
          responseMsg('error', 'Invalid verification code', { verified: false })
        )
    }
  } catch (error) {
    return res
      .status(202)
      .json(responseMsg('error', 'Error', { verified: false }))
  }
})

// /user
router.post('/getUsers', auth, async (req, res) => {
  const arrayOfId = req.body.users
  const uniqUsers = unique(arrayOfId)

  const usersCollection = res.locals.usersCollection

  const wrapid = uniqUsers.map(addObjectId)

  try {
    const users = await getManyItems(usersCollection, { _id: { $in: wrapid } })

    if (users && users.length > 0) {
      return res
        .status(202)
        .json(responseMsg('success', 'Fetch successfully', users))
    } else {
      return res.status(203).json(responseMsg('error', "Can't find users"))
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(responseMsg('error', error.message))
  }
})
// /user
router.post('/getShortUsers', auth, async (req, res) => {
  const arrayOfId = req.body.users
  const uniqUsers = unique(arrayOfId)

  const usersCollection = res.locals.usersCollection

  const wrapid = uniqUsers.map(addObjectId)

  try {
    const users = await getManyItems(
      usersCollection,
      { _id: { $in: wrapid } },
      shortUser
    )

    if (users && users.length > 0) {
      return res
        .status(202)
        .json(responseMsg('success', 'Fetch successfully', users))
    } else {
      return res.status(203).json(responseMsg('error', "Can't find users"))
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(responseMsg('error', error.message))
  }
})

// /user
router.post('/giveRecommendation/:id', auth, async (req, res) => {
  const token = req.user
  const userId = req.params.id

  const text = req.body.text

  const usersCollection = res.locals.usersCollection

  try {
    //  I am giving recommendations to this user
    const user = await usersCollection.findOne({ _id: ObjectId(userId) })

    // Thats me!
    const me = await usersCollection.findOne({ _id: ObjectId(token.id) })

    const user_o_r = user?.recommendation?.received || []
    const user_o_g = user?.recommendation?.given || []
    const user_n_r = { text: text, userId: ObjectId(token.id) }
    const user_r = { received: [...user_o_r, user_n_r], given: [...user_o_g] }

    // My Old Recieved Recommendations
    const me_o_r = me?.recommendation?.received || []
    // My Old Given Recommendations
    const me_o_g = me?.recommendation?.given || []
    // My New Given Recommendations
    const me_n_g = { text: text, userId: ObjectId(userId) }
    // My New Recieved Recommendations
    const me_r = { received: [...me_o_r], given: [...me_o_g, me_n_g] }
    if (me && user) {
      await usersCollection.updateOne(
        { _id: user?._id },
        { $set: { recommendation: user_r } },
        { new: true }
      )

      await usersCollection.updateOne(
        { _id: me?._id },
        { $set: { recommendation: me_r } },
        { new: true }
      )
      return res
        .status(202)
        .json(responseMsg('success', 'Recommendation added successfully', user))
    } else {
      return res.status(201).json(responseMsg('error', "Can't find me"))
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(responseMsg('error', error.message))
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
      return res.status(202).json(responseMsg('error', "Can't find user"))
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(responseMsg('error', error.message))
  }
})
// /user
router.post('/getAll/:id', auth, async (req, res) => {
  const { skip = 0, limit = 6, users = [] } = req.body
  const id = req.params.id
  const uniqUsers = unique(users)
  const usersCollection = res.locals.usersCollection
  const token = req.user

  try {
    const wrapid = uniqUsers.map((_id) => ObjectId(_id))

    const list = await usersCollection
      .find({
        $and: [
          { _id: { $not: { $eq: ObjectId(token.id) } } },
          { profileUrl: { $not: { $eq: id } } },
        ],
        _id: { $not: { $eq: { $in: wrapid } } },
      })
      .skip(skip)
      .limit(limit)
      .toArray()

    if (list) {
      return res
        .status(202)
        .json(responseMsg('success', 'Fetch successfully', list))
    } else {
      return res.status(202).json(responseMsg('error', "Can't find user"))
    }
  } catch (error) {
    console.error(error)
    return res.status(202).json(responseMsg('error', error.message))
  }
})

router.post('/follow/:id', auth, async (req, res) => {
  const id = req.params.id
  const token = req.user

  const usersCollection = res.locals.usersCollection

  try {
    const me = await usersCollection.findOne({ _id: ObjectId(token.id) })

    const toFollowUser = await usersCollection.findOne({
      _id: ObjectId(id),
    })

    // Add followingUser to me.followings
    // Add me to to followingUser.followers

    // ------ Following User -------

    const existingList =
      toFollowUser?.followers && toFollowUser?.followers.length > 0
        ? toFollowUser?.followers
        : []
    const followingUsersList = [...existingList, me?._id]
    await usersCollection.updateOne(
      { _id: toFollowUser._id },
      { $set: { followers: followingUsersList } },
      { new: true }
    )

    // ------ Me -------
    const existingMeList =
      me?.following && me?.following.length > 0 ? me?.following : []
    const meList = [...existingMeList, toFollowUser?._id]
    await usersCollection.updateOne(
      { _id: me._id },
      { $set: { following: meList } },
      { new: true }
    )

    return res
      .status(202)
      .json(responseMsg('success', 'Following user', meList))
  } catch (error) {
    console.error(error.message)
    return res.status(202).json(responseMsg('error', error.message))
  }
})
router.post('/unfollow/:id', auth, async (req, res) => {
  const id = req.params.id
  const token = req.user

  const usersCollection = res.locals.usersCollection

  try {
    const me = await usersCollection.findOne({ _id: ObjectId(token.id) })

    const toUnFollowUser = await usersCollection.findOne({
      _id: ObjectId(id),
    })

    // Remove followingUser from me.followings
    // Remove me from followingUser.followers

    // ------ Following User -------

    const existingList =
      toUnFollowUser?.followers && toUnFollowUser?.followers.length > 0
        ? toUnFollowUser?.followers
        : []
    const usersList = existingList.filter((userId) => userId !== me?._id)
    await usersCollection.updateOne(
      { _id: toUnFollowUser._id },
      { $set: { followers: usersList } },
      { new: true }
    )

    // ------ Me -------

    const existingMeList =
      me?.following && me?.following.length > 0 ? me?.following : []
    const meList = existingMeList.filter(
      (userId) => userId !== toUnFollowUser?._id
    )
    await usersCollection.updateOne(
      { _id: me._id },
      { $set: { following: meList } },
      { new: true }
    )

    return res
      .status(202)
      .json(responseMsg('success', 'UnFollowing user', meList))
  } catch (error) {
    console.error(error.message)
    return res.status(202).json(responseMsg('error', error.message))
  }
})

// ##################################################################### //
// ############################FAKE USERS######################################### //
// ##################################################################### //

const generateFakeUser = () => {
  let user = {
    myId: nanoid(),
    fullName: faker.name.findName(),
    email: faker.internet.email(),
    maritalStatus: 'Married',
    coverPicture: faker.image.nature(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    profilePicture: faker.image.avatar(),
    profileUrl: '',
    location: {
      livesIn: faker.address.cityName(),
    },
    other: {
      accountFilled: true,
      accountFinishedStep: 'chooseTemplate',
      template: 1,
      accountType: 'personal',
      createdOn: new Date(),
    },
    company: {
      companyName: faker.company.companyName(),
      previousCompany: faker.company.companyName(),
      currentCompany: faker.company.companyName(),
      jobTitle: faker.name.jobTitle(),
      companyAddress: faker.address.streetAddress(),
    },
  }
  const profileUrl =
    `${user?.firstName}_${user?.lastName}_${user?.myId}`.toLowerCase()

  user.profileUrl = profileUrl
  return user
}

router.post('/genFakeUsers', async (req, res) => {
  const users = []
  for (let i = 0; i <= 20; i++) {
    const user = generateFakeUser()
    users.push(user)
  }

  try {
    if (users.length > 0) {
      const usersCollection = res.locals.usersCollection
      await usersCollection.insertMany(users)
      return res
        .status(202)
        .json(responseMsg('success', 'Added users to collection'))
    }
  } catch (error) {
    console.error(error.message)

    return res.status(202).json(responseMsg('error', error.message))
  }
})

router.post('/getById/:id', auth, async (req, res) => {
  const id = req.params.id
  const token = req.user

  const usersCollection = res.locals.usersCollection

  try {
    const user = await usersCollection.findOne({ profileUrl: id })

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
          ? checkCurrentId(me.piv, user._id)
            ? [...me.piv]
            : [...me.piv, user._id]
          : [user._id]

      const uniqPiv = unique(piv)
      const pivCount = uniqPiv.length
      delete user.password

      await usersCollection.updateOne(
        { _id: me._id },
        { $set: { piv: uniqPiv, pivCount } },
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
      const uniqPwvp = unique(pwvp)

      const pwvpCount = uniqPwvp.length
      delete user.password

      await usersCollection.updateOne(
        { _id: user._id },
        { $set: { pwvp: uniqPwvp, pwvpCount } },
        { new: true }
      )
      return res
        .status(202)
        .json(responseMsg('success', 'Authentication successfully', user))
    } else {
      return res.status(202).json(responseMsg('error', 'No user found'))
    }
  } catch (error) {
    console.error(error.message)
    return res.status(202).json(responseMsg('error', error.message))
  }
})

router.delete('/', auth, async (req, res) => {
  const token = req.user

  const usersCollection = res.locals.usersCollection

  try {
    const user = await usersCollection.findOne({ _id: ObjectId(token.id) })

    if (user) {
      try {
        await usersCollection.deleteOne({ _id: user._id })

        return res
          .status(202)
          .json(responseMsg('success', 'Account deleted successfully', {}))
      } catch (error) {
        return res.status(203).json(responseMsg('error', error.message))
      }
    } else {
      return res
        .status(203)
        .json(
          responseMsg('error', 'Cannot find user. Please check credentials')
        )
    }
  } catch (error) {
    console.error(error.message)
    return res.status(203).json(responseMsg('error', error.message))
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
        delete dataToUpdate.access_token

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
        return res.status(203).json(responseMsg('error', error.message))
      }
    } else {
      return res
        .status(203)
        .json(
          responseMsg('error', 'Cannot find user. Please check credentials')
        )
    }
  } catch (error) {
    console.error(error.message)
    return res.status(203).json(responseMsg('error', error.message))
  }
})

module.exports = router
