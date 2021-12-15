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
  unique,
} = require('../utils')
var ObjectId = require('mongodb').ObjectId
const uuid = require('uuid')
require('dotenv').config()

app.post('/create-group', auth, async (req, res) => {
  const token = req.user
  const {
    groupName = '',
    groupDescription = '',
    groupRules = '',
    admin = [],
    coverPhoto,
    profilePhoto,
  } = req.body
  // collection
  const groupsCollection = res.locals.groupsCollection
  const usersCollection = res.locals.usersCollection

  if (groupName) {
    const data = {
      groupName,
      groupDescription,
      groupRules,
      createdOn: new Date(),
      createdBy: token.id,
      admin: [...admin],
      members: [token.id],
      coverPicture: coverPhoto,
      profilePicture: profilePhoto,
      messages: [], // not important for now
      posts: [],
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
      const groups = user?.groups

      if (groups && groups.length > 0) {
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
        return res
          .status(204)
          .json(responseMsg('error', 'User is not connected to any groups', {}))
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
app.get('/requested-list', auth, async (req, res) => {
  const token = req.user

  // collection
  const groupsCollection = res.locals.groupsCollection
  const usersCollection = res.locals.usersCollection
  try {
    const user = await getItem(usersCollection, token.id)
    if (user) {
      const groupIds = user?.notifications?.filter(
        (n) => n.type === 'group-invite-request'
      ).data._id

      if (groupIds && groupIds.length > 0) {
        const fullGroups = await getManyItems(groupsCollection, {
          _id: { $in: groupIds.map(addObjectId) },
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
        return res
          .status(204)
          .json(responseMsg('error', 'User is not connected to any groups', {}))
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
      let membersId = group?.members?.map(addObjectId)
      let adminsId = group?.admin?.map(addObjectId)

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

app.post('/send-invite', auth, async (req, res) => {
  const { targetIdArray = '', groupId = '' } = req.body
  if (targetIdArray && targetIdArray.length > 0 && groupId) {
    const usersCollection = res.locals.usersCollection
    const groupsCollection = res.locals.groupsCollection

    try {
      let userIds = targetIdArray.map(addObjectId)

      const users = await getManyItems(usersCollection, {
        _id: { $in: userIds },
      })
      const group = await getItem(groupsCollection, groupId)

      if (users && users.length > 0 && group) {
        let newNotification = {
          _id: uuid.v4(),
          type: 'group-invite-request',
          data: group,
          message: `You have a new group invite request from`,
        }

        const userUpdateArray = users.map((user) => {
          const userNotifications =
            user?.notifications?.length > 0
              ? [...user.notifications, newNotification]
              : [newNotification]
          return {
            updateOne: {
              filter: { _id: ObjectId(user._id) },
              update: { $set: { notifications: userNotifications } },
            },
          }
        })

        let requests =
          group?.requests?.length > 0
            ? [...group.requests, ...targetIdArray]
            : [...targetIdArray]

        await usersCollection.bulkWrite(userUpdateArray)
        await updateData(groupsCollection, groupId, {
          requests: unique(requests),
        })

        return res
          .status(204)
          .json(responseMsg('error', 'Invite sent successfully', {}))
      } else {
        return res
          .status(204)
          .json(responseMsg('error', 'User not found or group dont exist', {}))
      }
    } catch (error) {}
  } else {
    return res.status(404).json(responseMsg('error', 'No id found', {}))
  }
})
app.post('/invite', auth, async (req, res) => {
  const {
    targetId = '',
    groupId = '',
    notificationId = '',
    type = 'accept',
  } = req.body
  if (targetId && groupId && notificationId) {
    const usersCollection = res.locals.usersCollection
    const groupsCollection = res.locals.groupsCollection

    try {
      const user = await getItem(usersCollection, targetId)
      const group = await getItem(groupsCollection, groupId)

      if (user && group) {
        const groupMembers = [...group.members, targetId]
        const notificationIdx = user.notifications.findIndex(
          (n) => n._id === notificationId
        )
        const userNotifications = user?.notifications
        const requestIdx = group.requests.findIndex((r) => r === targetId)
        const requests = group.requests
        userNotifications.splice(notificationIdx, 1)
        requests.splice(requestIdx, 1)

        const userGroups =
          user?.groups && user?.groups?.length > 0
            ? [...user.groups, group._id]
            : [group._id]

        const userPayload =
          type === 'accept'
            ? { notifications: userNotifications, groups: userGroups }
            : { notifications: userNotifications }

        await updateData(usersCollection, targetId, userPayload)

        const groupPayload =
          type === 'accept' ? { requests, members: groupMembers } : { requests }

        await updateData(groupsCollection, groupId, groupPayload)

        return res
          .status(202)
          .json(
            responseMsg(
              'success',
              `Invite ${
                type === 'accept' ? 'Accept' : 'Declined'
              } successfully`,
              {}
            )
          )
      } else {
        return res
          .status(204)
          .json(responseMsg('error', 'User not found or group dont exist', {}))
      }
    } catch (error) {}
  } else {
    return res.status(404).json(responseMsg('error', 'Missing data', req.body))
  }
})
app.post('/exit', auth, async (req, res) => {
  const { targetId = '', groupId = '' } = req.body
  if (targetId && groupId) {
    const usersCollection = res.locals.usersCollection
    const groupsCollection = res.locals.groupsCollection

    try {
      const user = await getItem(usersCollection, targetId)
      const group = await getItem(groupsCollection, groupId)

      if (user && group) {
        const groupMembers = [...group.members].filter((m) => m !== targetId)
        const groupAdmins = [...group.admin].filter((m) => m !== targetId)

        const userGroups = [...user?.groups].filter((g) => g !== groupId)

        await updateData(usersCollection, targetId, {
          groups: userGroups,
        })

        await updateData(groupsCollection, groupId, {
          members: groupMembers,
          admin: groupAdmins,
        })

        return res
          .status(202)
          .json(responseMsg('success', `Successfully exited from group`, {}))
      } else {
        return res
          .status(204)
          .json(responseMsg('error', 'User not found or group dont exist', {}))
      }
    } catch (error) {}
  } else {
    return res.status(404).json(responseMsg('error', 'Missing data', req.body))
  }
})

module.exports = app
