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

app.post('/create-event', auth, async (req, res) => {
  const token = req.user
  const {
    eventName = '',
    eventDescription = '',
    coverPhoto,
    profilePhoto,
    startTime,
    endTime,
    startDate,
    endDate,
  } = req.body
  // collection
  const eventCollection = res.locals.eventCollection
  const usersCollection = res.locals.usersCollection

  if (eventName) {
    try {
      const data = {
        eventName,
        eventDescription,
        startTime,
        isOnline: true, // for now
        attendees: [token.id],
        endTime,
        startDate,
        endDate,
        eventBy: token.id,
        createdOn: new Date(),
        createdBy: token.id,
        coverPicture: coverPhoto,
        posts: [],
        profilePicture: profilePhoto,
      }

      const event = await eventCollection.insertOne(data)
      const user = await getItem(usersCollection, token.id)
      if (event && user) {
        let events =
          user?.events?.length > 0
            ? [...user?.events, event.insertedId]
            : [event.insertedId]
        await updateData(usersCollection, token.id, { events: events })
        return res
          .status(200)
          .json(
            responseMsg(
              'success',
              'New Event Created Successfully',
              event.insertedId
            )
          )
      }
    } catch (error) {
      console.error(error)
    }
  } else {
    return res.status(404).json(responseMsg('error', 'data not found', {}))
  }
})

app.get('/list', auth, async (req, res) => {
  const token = req.user
  const { short = false } = req.query
  // collection
  const eventCollection = res.locals.eventCollection
  const usersCollection = res.locals.usersCollection
  try {
    const user = await getItem(usersCollection, token.id)
    if (user) {
      const events = user?.events

      if (events && events.length > 0) {
        const fullEvents = await getManyItems(
          eventCollection,
          {
            _id: { $in: events.map(addObjectId) },
          },
          short ? { _id: 1, eventName: 1 } : undefined
        )

        if (fullEvents && fullEvents.length > 0) {
          return res
            .status(200)
            .json(
              responseMsg('success', 'Events fetched successfully', fullEvents)
            )
        } else {
          return res
            .status(404)
            .json(responseMsg('error', "Can't find events", {}))
        }
      } else {
        return res
          .status(204)
          .json(responseMsg('error', 'User is not attending any events', {}))
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

app.get('/e/:eventId', auth, async (req, res) => {
  const { eventId } = req.params

  // collection
  const eventCollection = res.locals.eventCollection
  const usersCollection = res.locals.usersCollection

  try {
    const event = await getItem(eventCollection, eventId)

    const users = await getManyItems(
      usersCollection,
      {
        _id: { $in: event?.attendees.map(addObjectId) || [] },
      },
      shortUser
    )

    const eventBy = users?.find(
      (ev) => ev?._id?.toString() === event?.eventBy?.toString()
    )

    const eventDetails = {
      ...event,
      attendees: users,
      eventBy: eventBy,
    }

    if (event) {
      return res
        .status(200)
        .json(
          responseMsg(
            'success',
            'Event Details Fetched successfully',
            eventDetails
          )
        )
    } else {
      return res.status(404).json(responseMsg('error', "Can't find event", {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(404)
      .json(responseMsg('error', 'Something went wrong', {}))
  }
})

app.delete('/:eventId', auth, async (req, res) => {
  const token = req.user
  const { eventId } = req.params

  const eventCollection = res.locals.eventCollection
  const usersCollection = res.locals.usersCollection

  if (eventId) {
    try {
      const event = await getItem(eventCollection, eventId)
      const user = await getItem(usersCollection, token.id)
      if (event?.eventBy.toString() === user._id.toString()) {
        await eventCollection.deleteOne({ _id: ObjectId(eventId) })
        await updateData(usersCollection, {
          events:
            user?.events?.filter(
              (ev) => ev?.toString() !== eventId.toString()
            ) || [],
        })
        // call all attendees about the change
      } else {
        return res
          .status(404)
          .json(responseMsg('error', 'Unauthorized access', {}))
      }
    } catch (error) {
      console.error(error)

      return res
        .status(404)
        .json(responseMsg('error', 'something went wrong', error))
    }
  } else {
    return res.status(404).json(responseMsg('error', 'no event id found', {}))
  }
})

app.post('/send-invite', auth, async (req, res) => {
  const { targetIdArray = '', eventId = '' } = req.body
  if (targetIdArray && targetIdArray.length > 0 && eventId) {
    const usersCollection = res.locals.usersCollection
    const eventCollection = res.locals.eventCollection

    try {
      let userIds = targetIdArray.map(addObjectId)

      const users = await getManyItems(usersCollection, {
        _id: { $in: userIds },
      })
      const event = await getItem(eventCollection, eventId)

      if (users && users.length > 0 && eventId) {
        let newNotification = {
          _id: uuid.v4(),
          type: 'event-invite-request',
          data: event,
          message: `You have a new event invite request from`,
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

        let invites =
          event?.invites?.length > 0
            ? [...event.invites, ...targetIdArray]
            : [...targetIdArray]

        await usersCollection.bulkWrite(userUpdateArray)
        await updateData(eventCollection, eventId, {
          invites: unique(invites),
        })

        return res
          .status(204)
          .json(responseMsg('error', 'Invite sent successfully', {}))
      } else {
        return res
          .status(204)
          .json(responseMsg('error', 'User not found or event dont exist', {}))
      }
    } catch (error) {}
  } else {
    return res.status(404).json(responseMsg('error', 'No id found', {}))
  }
})

app.post('/invite', auth, async (req, res) => {
  const {
    targetId = '',
    eventId = '',
    notificationId = '',
    type = 'accept',
  } = req.body

  if (targetId && eventId && notificationId) {
    const usersCollection = res.locals.usersCollection
    const eventCollection = res.locals.eventCollection

    try {
      const user = await getItem(usersCollection, targetId)
      const event = await getItem(eventCollection, eventId)

      if (user && event) {
        const attendees = [...event.attendees, targetId]
        const notificationIdx = user.notifications.findIndex(
          (n) => n._id === notificationId
        )
        const userNotifications = user?.notifications
        const inviteIdx = (event?.invites || []).findIndex(
          (r) => r === targetId
        )
        const invites = event.invites
        userNotifications.splice(notificationIdx, 1)
        invites.splice(inviteIdx, 1)

        const userEvents =
          user?.events && user?.events?.length > 0
            ? [...user.events, event._id]
            : [event._id]

        const userPayload =
          type === 'accept'
            ? { notifications: userNotifications, events: userEvents }
            : { notifications: userNotifications }

        await updateData(usersCollection, targetId, userPayload)

        const groupPayload =
          type === 'accept'
            ? { invites: invites, attendees: attendees }
            : { invites: invites }

        await updateData(eventCollection, eventId, groupPayload)

        return res
          .status(202)
          .json(
            responseMsg(
              'success',
              `Event Invite ${
                type === 'accept' ? 'Accept' : 'Declined'
              } successfully`,
              userNotifications
            )
          )
      } else {
        return res
          .status(204)
          .json(responseMsg('error', 'User not found or group dont exist', {}))
      }
    } catch (error) {
      console.error(error)
      return res
        .status(404)
        .json(responseMsg('error', 'something went wrong', {}))
    }
  } else {
    return res.status(404).json(responseMsg('error', 'Missing data', req.body))
  }
})

module.exports = app
