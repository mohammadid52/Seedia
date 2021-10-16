/* eslint-disable quotes */
const app = require('express').Router()
const auth = require('../middleware/verifyAuth')
const { responseMsg, getItem } = require('../utils')
var ObjectId = require('mongodb').ObjectId
require('dotenv').config()

// ~~~~~~~~~~~~~~Add new project~~~~~~~~~~~~~~ //
app.post('/add', auth, async (req, res) => {
  const token = req.user
  const { projectData } = req.body

  const usersCollection = res.locals.usersCollection
  const projectsCollection = res.locals.projectsCollection

  if (projectData) {
    try {
      const user = await getItem(usersCollection, token.id) //! current user
      if (user && user?.business) {
        const newProject = {
          ...projectData,
          postedOn: new Date(),
          postedBy: token.id,
        }
        const project = await projectsCollection.insertOne(newProject)

        await usersCollection.updateOne(
          { _id: ObjectId(user._id) },
          {
            $set: {
              business: {
                ...user.business,
                projects:
                  user?.projects?.length > 0
                    ? [...user.products, project.insertedId]
                    : [project.insertedId],
              },
            },
          },
          { new: true }
        )

        return res
          .status(204)
          .json(
            responseMsg('success', 'New project successfully added', newProject)
          )
      }
    } catch (error) {
      console.error(error)
      return res
        .status(403)
        .json(
          responseMsg('error', 'Something went wrong. Please try again', error)
        )
    }
  } else {
    return res
      .status(403)
      .json(responseMsg('error', 'Project data not found', {}))
  }
})

// ~~~~~~~~~~~~~~Get single project by id~~~~~~~~~~~~~~ //
app.get('/p/:projectId', auth, async (req, res) => {
  const { projectId } = req.params

  const projectsCollection = res.locals.projectsCollection
  const usersCollection = res.locals.usersCollection

  if (projectId) {
    const project = await getItem(projectsCollection, projectId)
    const company = await getItem(usersCollection, project.postedBy)
    if (project && company) {
      const updated = { ...project, company }
      return res
        .status(202)
        .json(responseMsg('error', 'Project fetched successfully ', updated))
    } else {
      return res
        .status(403)
        .json(responseMsg('error', 'Cannot find project ', {}))
    }
  }
})

// ~~~~~~~~~~~~~~List all projects~~~~~~~~~~~~~~ //
app.get('/list', auth, async (req, res) => {})

module.exports = app
