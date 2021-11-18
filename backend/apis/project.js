/* eslint-disable quotes */
const app = require('express').Router()
const auth = require('../middleware/verifyAuth')
const {
  responseMsg,
  getItem,
  getManyItems,
  addObjectId,
  updateData,
  removedWords,
} = require('../utils')
var ObjectId = require('mongodb').ObjectId
require('dotenv').config()

async function getUsersRelatedToProject(project, collection) {
  const separatedTitle = project?.title?.split(' ')
  const separatedDescription = project?.briefDescription?.split(' ')

  const concatedKeywords = [...separatedTitle, ...separatedDescription]
  const keywords = concatedKeywords.filter((word) => word.length > 2)
  const keywordsNoDuplicate = [...new Set(keywords)]
  const joinedKeywords = keywordsNoDuplicate
    .filter((tag) => !removedWords.includes(tag))
    .join(' ')

  let usersRelatedToProject = await collection
    .find({
      $text: {
        $search: 'react',
        $caseSensitive: false,
        $diacriticSensitive: true,
      },
    })
    .project({ score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
    .toArray()

  return usersRelatedToProject
}

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
          views: 0,
          location: user.location,
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
                    ? [...user.projects, project.insertedId]
                    : [project.insertedId],
              },
            },
          },
          { new: true }
        )

        return res.status(204).json(
          responseMsg('success', 'New project successfully added', {
            id: project.insertedId,
            name: projectData.title,
          })
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
  const token = req.user

  const projectsCollection = res.locals.projectsCollection
  const usersCollection = res.locals.usersCollection

  if (projectId) {
    const project = await getItem(projectsCollection, projectId)

    const company = await getItem(usersCollection, project.postedBy)
    if (project && company) {
      const itsMyProject = company._id.toString() === token?.id

      let currentViews = project?.views || 0
      let updatedViews = itsMyProject ? currentViews : currentViews + 1
      const updated = {
        ...project,
        company,
        location: company.location,
      }
      if (currentViews !== updatedViews) {
        await updateData(projectsCollection, projectId, { views: updatedViews })
      }

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
app.get('/my/list', auth, async (req, res) => {
  const token = req.user

  const projectsCollection = res.locals.projectsCollection
  const usersCollection = res.locals.usersCollection
  try {
    const company = await getItem(usersCollection, token.id)
    if (company) {
      const wrapId = company?.business?.projects?.map(addObjectId)
      let projects = await getManyItems(projectsCollection, {
        _id: { $in: wrapId },
      })

      projects = projects?.map((pr) => ({
        ...pr,
        company,
        location: company.location,
      }))
      return res
        .status(202)
        .json(responseMsg('success', 'Project fetched successfully ', projects))
    } else {
      return res
        .status(204)
        .json(responseMsg('error', 'Cannot find company ', {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(204)
      .json(responseMsg('error', 'Something went wrong. Please try again', {}))
  }
})

app.get('/list', async (req, res) => {
  const { search = '', related = [''] } = req.query

  if (search.length >= 3 || related.length > 0) {
    const usersCollection = res.locals.usersCollection
    const projectsCollection = res.locals.projectsCollection
    //
    try {
      let searchedProjects = await projectsCollection
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

      if (searchedProjects.length > 0) {
        const companies = await getManyItems(usersCollection, {
          _id: { $in: searchedProjects.map((pr) => addObjectId(pr.postedBy)) },
        })
        searchedProjects = searchedProjects.map((pr) => {
          const company = companies.find(
            (c) => c._id.toString() === pr.postedBy.toString()
          )
          return {
            ...pr,
            company,
            location: company.location,
          }
        })

        return res
          .status(202)
          .json(
            responseMsg(
              'success',
              'Projects fetched successfully',
              searchedProjects
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

module.exports = app
