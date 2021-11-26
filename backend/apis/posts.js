/* eslint-disable quotes */
const app = require('express').Router()
const auth = require('../middleware/verifyAuth')

const {
  responseMsg,
  getItem,
  updateData,
  unique,
  convertToString,
  addObjectId,
  getManyItems,
} = require('../utils')
const faker = require('faker')
const times = require('lodash/times')

require('dotenv').config()

// ~~~~~~~~~~~~~~~~~~~ Add New Post ~~~~~~~~~~~~~~~~~~~~ //

app.post('/add-post', auth, async (req, res) => {
  const token = req.user

  const { postData } = req.body
  const { postType = 'normal' } = postData

  if (postType) {
    const postCollection = res.locals.postCollection
    const usersCollection = res.locals.usersCollection
    try {
      const user = await getItem(usersCollection, token.id)
      if (user) {
        const updatedPost = {
          ...postData,
          comments: [],
          likes: [],
          postedBy: token.id,
          postedOn: new Date(),
          viewedBy: [],
        }
        const afterInsertPost = await postCollection.insertOne(updatedPost)
        const postUrl = `${user?.firstName}_${
          user?.lastName
        }-${afterInsertPost.insertedId.toString()}`.toLowerCase()
        const currentActivity = {
          postUrl: postUrl,
          type: 'post',
          text: updatedPost.text,
          subtext: `${user.firstName} posted this`,
          postMedia:
            updatedPost?.links && updatedPost?.links.length
              ? updatedPost?.links[0].url
              : null,
          userImage: user?.profilePicture,
          activityIdx: user?.activity?.length || 0,
        }

        let activity =
          user?.activity?.length > 0
            ? [...user.activity, currentActivity]
            : [currentActivity]

        let updatedPosts =
          user?.posts?.length > 0
            ? [...user.posts, afterInsertPost.insertedId]
            : [afterInsertPost.insertedId]

        await updateData(usersCollection, token.id, {
          posts: updatedPosts,
          activity: activity,
        })
        await updateData(postCollection, afterInsertPost.insertedId, {
          postUrl: postUrl,
        })

        return res
          .status(202)
          .json(responseMsg('success', 'Post added successfully', postUrl))
      } else {
        return res
          .status(204)
          .json(responseMsg('error', 'Cannot find user ', {}))
      }
    } catch (error) {
      console.error(error)
      return res
        .status(204)
        .json(
          responseMsg('error', 'Something went wrong. Please try again', {})
        )
    }
  } else {
    return res.status(204).json(responseMsg('error', 'Missing post data', {}))
  }
})

app.post('/view', auth, async (req, res) => {
  const { postId = '' } = req.query
  const token = req.user
  const userId = token.id
  if (postId && userId) {
    const postCollection = res.locals.postCollection

    try {
      const post = await getItem(postCollection, postId)

      if (post) {
        let viewedBy = unique([...post.viewedBy, userId].map(convertToString))
        await updateData(postCollection, postId, { viewedBy: viewedBy })
      }
      return res.status(202).json(responseMsg('success', 'Post viewed', {}))
    } catch (error) {
      console.error(error)
    }
  } else {
    return res
      .status(404)
      .json(responseMsg('error', 'postid or userid is missing', {}))
  }
})

// ~~~~~~~~~~~~~~~~~~~ Save Post ~~~~~~~~~~~~~~~~~~~~ //

app.post('/s', auth, async (req, res) => {
  const { action = 'save', postId = '' } = req.query
  const token = req.user
  const userId = token.id
  if (userId && postId) {
    const usersCollection = res.locals.usersCollection

    try {
      const user = await getItem(usersCollection, userId)

      if (user) {
        let savedPosts = user?.savedPosts
          ? unique([...user?.savedPosts].map(convertToString))
          : []
        if (action === 'save') {
          savedPosts.push(postId)
        } else {
          const idx = savedPosts.findIndex((_postId) => _postId === postId)
          savedPosts.splice(idx, 1)
        }
        await updateData(usersCollection, userId, { savedPosts: savedPosts })
        return res
          .status(202)
          .json(responseMsg('success', 'Post saved or unsaved', savedPosts))
      }
    } catch (error) {
      console.error(error)
    }
  } else {
    return res
      .status(404)
      .json(responseMsg('error', 'postid or userid is missing', {}))
  }
})

// ~~~~~~~~~~~~~~~~~~~Fetch Saved Post ~~~~~~~~~~~~~~~~~~~~ //

app.get('/s', auth, async (req, res) => {
  const token = req.user
  const userId = token.id
  if (userId) {
    const usersCollection = res.locals.usersCollection
    const postCollection = res.locals.postCollection

    try {
      const user = await getItem(usersCollection, userId)

      if (user) {
        let savedPosts = user?.savedPosts
          ? unique([...user?.savedPosts].map(addObjectId))
          : []

        let posts = await getManyItems(postCollection, {
          _id: { $in: savedPosts },
        })
        if (posts && posts.length > 0) {
          const users = await getManyItems(usersCollection, {
            _id: { $in: posts.map((p) => addObjectId(p.postedBy)) },
          })
          posts = posts.map((post) => {
            const user = users.find(
              (user) => user._id.toString() === post.postedBy.toString()
            )
            return {
              ...post,
              user: user,
            }
          })
          return res
            .status(202)
            .json(
              responseMsg('success', 'Saved items fetched successfully', posts)
            )
        } else {
          return res
            .status(409)
            .json(responseMsg('error', 'No posts found', {}))
        }
      }
    } catch (error) {
      console.error(error)
    }
  } else {
    return res
      .status(404)
      .json(responseMsg('error', 'postid or userid is missing', {}))
  }
})
// ~~~~~~~~~~~~~~~~~~~Fetch Saved Profiles ~~~~~~~~~~~~~~~~~~~~ //

app.get('/savedProfiles', auth, async (req, res) => {
  const token = req.user
  const userId = token.id
  if (userId) {
    const usersCollection = res.locals.usersCollection

    try {
      const user = await getItem(usersCollection, userId)

      if (user) {
        let savedProfiles = user?.savedProfiles
          ? unique([...user?.savedProfiles].map(addObjectId))
          : []

        let users = await getManyItems(usersCollection, {
          _id: { $in: savedProfiles },
        })
        if (users && users.length > 0) {
          return res
            .status(202)
            .json(
              responseMsg(
                'success',
                'Saved profiles fetched successfully',
                users
              )
            )
        } else {
          return res
            .status(409)
            .json(responseMsg('error', 'No posts found', {}))
        }
      }
    } catch (error) {
      console.error(error)
    }
  } else {
    return res
      .status(404)
      .json(responseMsg('error', 'postid or userid is missing', {}))
  }
})

// ~~~~~~~~~~~~~~~~~~~ Feature Post ~~~~~~~~~~~~~~~~~~~~ //

app.post('/f', auth, async (req, res) => {
  const { action = 'feature', postId = '' } = req.query
  const token = req.user
  const userId = token.id
  if (userId && postId) {
    const usersCollection = res.locals.usersCollection

    try {
      const user = await getItem(usersCollection, userId)

      if (user) {
        let featuredPosts = user?.featuredPosts
          ? unique([...user?.featuredPosts].map(convertToString))
          : []
        if (action === 'feature') {
          featuredPosts.push(postId)
        } else {
          const idx = featuredPosts.findIndex((_postId) => _postId === postId)
          featuredPosts.splice(idx, 1)
        }
        await updateData(usersCollection, userId, {
          featuredPosts: featuredPosts,
        })
        return res
          .status(202)
          .json(
            responseMsg('success', 'Post featured or unfeatured', featuredPosts)
          )
      }
    } catch (error) {
      console.error(error)
    }
  } else {
    return res
      .status(404)
      .json(responseMsg('error', 'postid or userid is missing', {}))
  }
})

const getPosts = (user, postId, fieldName = 'posts') => {
  let currentValue = user && user[fieldName] ? [...user[fieldName]] : []
  if (currentValue.length > 0) {
    currentValue = currentValue.map(convertToString)
    const idx = currentValue.findIndex((a) => a === postId)
    if (idx !== -1) {
      currentValue.splice(idx, 1)
    }
  }
  return currentValue
}

const getActivity = (user, postUrl) => {
  let activity = user && user?.activity ? [...user.activity] : []
  if (activity.length > 0) {
    const exists = activity.findIndex((a) => a.postUrl === postUrl)
    if (exists !== -1) {
      activity.splice(exists, 1)
    }
  }
  return activity
}

// ~~~~~~~~~~~~~~~~~~~Delete Post ~~~~~~~~~~~~~~~~~~~~ //

app.delete('/', auth, async (req, res) => {
  const token = req.user
  const { postId = '' } = req.query

  const postCollection = res.locals.postCollection
  const usersCollection = res.locals.usersCollection

  try {
    const post = await getItem(postCollection, postId)
    const user = await getItem(usersCollection, token.id)

    if (post.postedBy === token.id.toString()) {
      if (post) {
        try {
          let savedPosts = getPosts(user, post._id, 'savedPosts')

          let posts = getPosts(user, post._id)

          let featuredPosts = getPosts(user, post._id, 'featuredPosts')

          let activity = getActivity(user, post.postUrl)

          await updateData(usersCollection, token.id, {
            savedPosts: savedPosts,
            posts: posts,
            featuredPosts: featuredPosts,
            activity: activity,
          })
          await postCollection.deleteOne({ _id: post._id })

          return res
            .status(202)
            .json(responseMsg('success', 'Post deleted successfully', {}))
        } catch (error) {
          return res.status(203).json(responseMsg('error', error.message))
        }
      } else {
        return res
          .status(203)
          .json(
            responseMsg('error', 'Cannot find post. Please check credentials')
          )
      }
    } else {
      return res
        .status(203)
        .json(
          responseMsg('error', 'Cannot verify auth. Please check credentials')
        )
    }
  } catch (error) {
    console.error(error.message)
    return res.status(203).json(responseMsg('error', error.message))
  }
})

app.post('/add-random', auth, async (req, res) => {
  const token = req.user

  if (true) {
    const postCollection = res.locals.postCollection
    const usersCollection = res.locals.usersCollection
    try {
      const user = await getItem(usersCollection, token.id)
      if (user) {
        const randomPosts = times(20, (num) => ({
          comments: [],
          likes: [],
          postedBy: token.id,
          postedOn: new Date(),
          viewedBy: [],
          links: [faker.image.nature()],
          text: faker.lorem.sentence(20),
        }))

        const afterInsertPosts = await postCollection.insertMany(randomPosts)
        let updatedPosts =
          user?.posts?.length > 0
            ? [
                ...user.posts,
                ...randomPosts.map((post, idx) => ({
                  ...post,
                  _id: afterInsertPosts.insertedIds[idx],
                })),
              ]
            : [
                ...randomPosts.map((post, idx) => ({
                  ...post,
                  _id: afterInsertPosts.insertedIds[idx],
                })),
              ]
        await updateData(usersCollection, token.id, { posts: updatedPosts })

        return res
          .status(202)
          .json(responseMsg('success', 'Post added successfully', updatedPosts))
      } else {
        return res
          .status(204)
          .json(responseMsg('error', 'Cannot find user ', {}))
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
})

// ~~~~~~~~~~~~~~~~~~~List Feed ~~~~~~~~~~~~~~~~~~~~ //

app.get('/feed', auth, async (req, res) => {
  const token = req.user
  const { limit = 10, skip = 0 } = req.query

  const _limit = Number(limit)
  const _skip = Number(skip)

  const postCollection = res.locals.postCollection
  const usersCollection = res.locals.usersCollection
  try {
    const user = await getItem(usersCollection, token.id)
    if (user) {
      let ids =
        user?.following?.length > 0
          ? [...user?.following, token.id]
          : [token.id]

      let idListStringed = unique(ids.map(convertToString))
      let idListObjectId = unique(ids.map(addObjectId))

      if (idListStringed.length > 0 && idListObjectId.length > 0) {
        const users = await getManyItems(usersCollection, {
          _id: { $in: idListObjectId },
        })
        const filter = {
          $and: [{ postedBy: { $in: idListStringed } }],
        }
        const postsCount = await postCollection.find(filter).count()

        let posts = await postCollection
          .find(filter)
          .skip(_skip)
          .limit(_limit)
          .sort({ postedOn: -1 })
          .toArray()

        if (posts && posts.length > 0) {
          posts = posts.map((post) => {
            const user = users.find(
              (user) => user._id.toString() === post.postedBy.toString()
            )
            return {
              ...post,
              user: user,
            }
          })
          return res.status(202).json(
            responseMsg('success', 'Posts fetched successfully', {
              posts,
              count: postsCount,
            })
          )
        } else {
          return res
            .status(409)
            .json(responseMsg('error', 'No posts found', {}))
        }
      } else {
        return res.status(204).json(responseMsg('error', 'empty array', {}))
      }
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

// ~~~~~~~~~~~~~~~~~~~Recent Activity ~~~~~~~~~~~~~~~~~~~~ //
app.get('/recent-activity', auth, async (req, res) => {
  const token = req.user
  const { limit = 10, userId = token.id } = req.query

  const _limit = Number(limit)

  const postCollection = res.locals.postCollection
  const usersCollection = res.locals.usersCollection
  try {
    const user = await getItem(usersCollection, userId)
    if (user && user?.activity && user.activity.length > 0) {
      const activity = user.activity
      const postUrls = activity.map((d) => d.postUrl)

      let posts = await postCollection
        .find({
          postUrl: { $in: postUrls },
        })
        .limit(_limit)
        .sort({ postedOn: -1 })
        .toArray()

      const updatedActivity = activity.map((d) => {
        const post = posts.find((p) => p.postUrl === d.postUrl)
        return {
          ...d,
          post: { ...post, user },
        }
      })
      return res
        .status(202)
        .json(
          responseMsg(
            'success',
            'Activity fetched successfully',
            updatedActivity
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

// ~~~~~~~~~~~~~~~~~~~Fetch Single Post ~~~~~~~~~~~~~~~~~~~~ //

app.get('/p', async (req, res) => {
  const { postUrl } = req.query

  const postCollection = res.locals.postCollection
  const usersCollection = res.locals.usersCollection

  if (postUrl) {
    try {
      let post = await postCollection.findOne({ postUrl: postUrl })
      const user = await getItem(usersCollection, post.postedBy)
      if (post) {
        post = {
          ...post,
          user,
        }
        return res
          .status(202)
          .json(responseMsg('success', 'Post fetched successfully', post))
      } else {
        return res
          .status(204)
          .json(
            responseMsg('error', 'Post is removed by the owner', { user: user })
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
  } else {
    return res.status(404).json(responseMsg('error', 'Missing postId', {}))
  }
})

// ~~~~~~~~~~~~~~~~~~~Get Average Post Views ~~~~~~~~~~~~~~~~~~~~ //

app.get('/averagePostViews', auth, async (req, res) => {
  const token = req.user

  const postCollection = res.locals.postCollection
  const usersCollection = res.locals.usersCollection

  try {
    const user = await getItem(usersCollection, token.id)
    if (user && user.posts && user.posts.length > 0) {
      const userPosts = await getManyItems(
        postCollection,
        { _id: { $in: user.posts } },
        { viewedBy: 1 }
      )

      if (userPosts && user) {
        const postViews = userPosts.reduce(
          (tot, post) =>
            unique(post?.viewedBy).filter((d) => d.toString() !== token.id)
              ?.length + tot,
          0
        )
        return res
          .status(202)
          .json(
            responseMsg('success', 'Post views successfully fetched', postViews)
          )
      } else {
        return res.status(204).json(
          responseMsg('error', 'Cannot find post or user.', {
            userPosts,
            user,
          })
        )
      }
    } else {
      return res
        .status(204)
        .json(responseMsg('error', 'Cannot find posts.', {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(204)
      .json(responseMsg('error', 'Something went wrong. Please try again', {}))
  }
})

module.exports = app
