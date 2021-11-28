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

require('dotenv').config()

app.post('/add', auth, async (req, res) => {
  const token = req.user
  const { requestData } = req.body
  // collection
  const requestsCollection = res.locals.requestsCollection
  const usersCollection = res.locals.usersCollection

  if (requestData) {
    const updatedData = {
      ...requestData,
      postedOn: new Date(),
      postedBy: token.id,
    }

    const request = await requestsCollection.insertOne(updatedData)
    const user = await getItem(usersCollection, token.id)
    if (request && user) {
      let updatedRequests =
        user?.requests?.length > 0
          ? [...user?.requests, request.insertedId]
          : [request.insertedId]
      await updateData(usersCollection, token.id, { requests: updatedRequests })

      return res
        .status(200)
        .json(
          responseMsg(
            'success',
            `Dear ${user.firstName}. You have successfully placed a request on your profile. This will be seen by other users`,
            request.insertedId
          )
        )
    }
  } else {
    return res
      .status(404)
      .json(responseMsg('error', 'Request data not found', {}))
  }
})
app.get('/r/:requestId', auth, async (req, res) => {
  const { requestId } = req.params
  const token = req.user

  const requestsCollection = res.locals.requestsCollection

  const usersCollection = res.locals.usersCollection

  if (requestId) {
    const requestData = await getItem(requestsCollection, requestId)
    const user = await getItem(usersCollection, requestData.postedBy)
    if (requestData && user) {
      const itsMyRequest = user._id.toString() === token?.id

      let currentViews = requestData?.views || 0
      let updatedViews = itsMyRequest ? currentViews : currentViews + 1
      const updated = {
        ...requestData,
        user: user,
      }
      if (currentViews !== updatedViews) {
        await updateData(requestsCollection, requestId, { views: updatedViews })
      }

      return res
        .status(202)
        .json(responseMsg('error', 'Request fetched successfully ', updated))
    } else {
      return res
        .status(403)
        .json(responseMsg('error', 'Cannot find project ', {}))
    }
  }
})

app.get('/list', async (req, res) => {
  const { search = '', related = [''] } = req.query

  if (search.length >= 3 || related.length > 0) {
    const usersCollection = res.locals.usersCollection
    const requestsCollection = res.locals.requestsCollection

    try {
      let searchedEmployees = await requestsCollection
        .find({
          $text: {
            $search: search || related,
            $caseSensitive: false,
            $diacriticSensitive: true,
          },
        })
        .project({ score: { $meta: 'textScore' } })
        .sort({ score: { $meta: 'textScore' } })
        .toArray()

      if (searchedEmployees.length > 0) {
        const wrapId = searchedEmployees.map((pr) => addObjectId(pr.postedBy))

        const users = await getManyItems(
          usersCollection,
          {
            _id: {
              $in: wrapId,
            },
          },
          shortUser
        )

        searchedEmployees = searchedEmployees.map((pr) => {
          const user = users.find(
            (c) => c._id.toString() === pr.postedBy.toString()
          )

          return {
            ...pr,
            user,
          }
        })

        return res
          .status(202)
          .json(
            responseMsg(
              'success',
              'Projects fetched successfully',
              searchedEmployees
            )
          )
      } else {
        return res
          .status(204)
          .json(
            responseMsg('error', 'Cannot find projects with searched term', {})
          )
      }
    } catch (error) {
      console.error(error)
      return res
        .status(204)
        .json(
          responseMsg('error', 'Something went wrong. Please try again', {})
        )
    }
  }
  return res
    .status(204)
    .json(responseMsg('error', 'Something went wrong. Please try again', {}))
})
app.get('/my/list', auth, async (req, res) => {
  const token = req.user

  const requestsCollection = res.locals.requestsCollection
  const usersCollection = res.locals.usersCollection
  try {
    const user = await getItem(usersCollection, token.id)
    if (user) {
      let requests = await getManyItems(requestsCollection, {
        postedBy: token.id,
      })

      requests = requests.map((pr) => ({
        ...pr,
        user: user,
      }))
      return res
        .status(202)
        .json(
          responseMsg(
            'success',
            'Requests List fetched successfully ',
            requests
          )
        )
    } else {
      return res.status(204).json(responseMsg('error', 'Cannot find user ', {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(204)
      .json(responseMsg('error', 'Something went wrong. Please try again', {}))
  }
})

module.exports = app
