/* eslint-disable quotes */
const app = require('express').Router()
const auth = require('../middleware/verifyAuth')
const {
  responseMsg,
  addObjectId,
  getManyItems,
  getItem,
  updateData,
  shortUser,
} = require('../utils')
var ObjectId = require('mongodb').ObjectId
require('dotenv').config()

app.post('/create-group', auth, async (req, res) => {
  const token = req.user
  const {
    members = [],
    groupName = '',
    groupDescription = '',
    admin = [],
  } = req.body
  // collection
  const groupsCollection = res.locals.groupsCollection
  const usersCollection = res.locals.usersCollection

  if (members && groupName) {
    const data = {
      groupName,
      groupDescription,
      createdOn: new Date(),
      createdBy: token.id,
      admin: [...admin, token.id],

      members: [...members, token.id],
      messages: [], // not important for now
    }

    const group = await groupsCollection.insertOne(data)
    const user = await getItem(usersCollection, token.id)
    if (group && user) {
      let groups =
        user?.groups?.length > 0
          ? [...user?.groups, group.insertedId]
          : [group.insertedId]
      await updateData(usersCollection, token.id, { groups: groups })
      return res
        .status(200)
        .json(responseMsg('success', 'New Group Created Successfully', data))
    }
  } else {
    return res.status(404).json(responseMsg('error', 'data not found', {}))
  }
})

app.get('/list', auth, async (req, res) => {
  const token = req.user

  // collection
  const groupsCollection = res.locals.groupsCollection
  const usersCollection = res.locals.usersCollection
  try {
    const user = await getItem(usersCollection, token.id)
    if (user) {
      const groups = user.groups

      const fullGroups = await getManyItems(groupsCollection, {
        _id: { $in: groups.map(addObjectId) },
      })
      if (fullGroups && fullGroups.length > 0) {
        return res
          .status(200)
          .json(
            responseMsg('success', 'Groups Fetched successfully', fullGroups)
          )
      } else {
        return res
          .status(404)
          .json(responseMsg('error', "Can't find groups", {}))
      }
    } else {
      return res.status(404).json(responseMsg('error', "Can't find user", {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(404)
      .json(responseMsg('error', 'Something went wrong', {}))
  }
})
app.get('/g/:groupId', auth, async (req, res) => {
  const { groupId } = req.params

  // collection
  const groupsCollection = res.locals.groupsCollection
  const usersCollection = res.locals.usersCollection
  try {
    const group = await getItem(groupsCollection, groupId)
    if (group) {
      let membersId = group.members.map(addObjectId)
      let adminsId = group.admin.map(addObjectId)

      const users = await getManyItems(
        usersCollection,
        {
          _id: { $in: membersId },
        },
        shortUser
      )
      const admins = await getManyItems(usersCollection, {
        _id: { $in: adminsId },
      })

      const groupDetails = {
        ...group,
        members: users,
        admin: admins,
      }

      return res
        .status(200)
        .json(
          responseMsg(
            'success',
            'Group Details Fetched successfully',
            groupDetails
          )
        )
    } else {
      return res.status(404).json(responseMsg('error', "Can't find user", {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(404)
      .json(responseMsg('error', 'Something went wrong', {}))
  }
})
app.post('/admin/:groupId/:memberId', auth, async (req, res) => {
  const { groupId, memberId } = req.params
  const { action = 'make' } = req.query

  const makeAdmin = action === 'make'

  // collection
  const groupsCollection = res.locals.groupsCollection

  try {
    const group = await getItem(groupsCollection, groupId)
    if (group) {
      let currentAdmins = [...group?.admin]

      if (makeAdmin) {
        currentAdmins.push(memberId)
      } else {
        const idx = currentAdmins.findIndex((id) => id === memberId)
        currentAdmins.splice(idx, 1)
      }

      await updateData(groupsCollection, groupId, { admin: currentAdmins })

      return res
        .status(200)
        .json(responseMsg('success', 'Success', currentAdmins))
    } else {
      return res.status(404).json(responseMsg('error', "Can't find user", {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(404)
      .json(responseMsg('error', 'Something went wrong', {}))
  }
})

module.exports = app
