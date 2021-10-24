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

require('dotenv').config()

app.post('/add-post', auth, async (req, res) => {
  const token = req.user

  const { postData } = req.body
  const { postType = 'normal', text = '' } = postData

  if (text && postType) {
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
              ? updatedPost?.links[0]
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
  } else {
    return res.status(204).json(responseMsg('error', 'Missing post data', {}))
  }
})
// app.post('/add-random', auth, async (req, res) => {
//   const token = req.user

//   if (true) {
//     const postCollection = res.locals.postCollection
//     const usersCollection = res.locals.usersCollection
//     try {
//       const user = await getItem(usersCollection, token.id)
//       if (user) {
//         const randomPosts = times(20, (num) => ({
//           comments: [],
//           likes: [],
//           postedBy: token.id,
//           postedOn: new Date(),
//           viewedBy: [],
//           links: [faker.image.nature()],
//           text: faker.lorem.sentence(20),
//         }))

//         const afterInsertPosts = await postCollection.insertMany(randomPosts)
//         let updatedPosts =
//           user?.posts?.length > 0
//             ? [
//                 ...user.posts,
//                 ...randomPosts.map((post, idx) => ({
//                   ...post,
//                   _id: afterInsertPosts.insertedIds[idx],
//                 })),
//               ]
//             : [
//                 ...randomPosts.map((post, idx) => ({
//                   ...post,
//                   _id: afterInsertPosts.insertedIds[idx],
//                 })),
//               ]
//         await updateData(usersCollection, token.id, { posts: updatedPosts })

//         return res
//           .status(202)
//           .json(responseMsg('success', 'Post added successfully', updatedPosts))
//       } else {
//         return res
//           .status(204)
//           .json(responseMsg('error', 'Cannot find user ', {}))
//       }
//     } catch (error) {
//       console.error(error)
//       return res
//         .status(204)
//         .json(
//           responseMsg('error', 'Something went wrong. Please try again', {})
//         )
//     }
//   } else {
//     return res.status(404).json(responseMsg('error', 'Missing post data', {}))
//   }
// })

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

app.get('/feed', auth, async (req, res) => {
  const token = req.user
  const { limit = 10 } = req.query

  const _limit = Number(limit)

  const postCollection = res.locals.postCollection
  const usersCollection = res.locals.usersCollection
  try {
    const user = await getItem(usersCollection, token.id)
    if (user) {
      let idListStringed = unique(
        [...user.followers, token.id].map(convertToString)
      )
      let idListObjectId = unique(
        [...user.followers, token.id].map(addObjectId)
      )

      const users = await getManyItems(usersCollection, {
        _id: { $in: idListObjectId },
      })

      let posts = await postCollection
        .find({
          $and: [{ postedBy: { $in: idListStringed } }],
        })
        // .skip(_limit === 10 ? 0 : _limit > 10 ? _limit - 10 : 0)
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
        return res
          .status(202)
          .json(responseMsg('success', 'Posts fetched successfully', posts))
      } else {
        return res.status(409).json(responseMsg('error', 'No posts found', {}))
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
          .json(responseMsg('error', 'Cannot find post.', {}))
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
app.get('/averagePostViews', auth, async (req, res) => {
  const token = req.user

  const postCollection = res.locals.postCollection
  const usersCollection = res.locals.usersCollection

  try {
    const user = await getItem(usersCollection, token.id)
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
      return res
        .status(204)
        .json(
          responseMsg('error', 'Cannot find post or user.', { userPosts, user })
        )
    }
  } catch (error) {
    console.error(error)
    return res
      .status(204)
      .json(responseMsg('error', 'Something went wrong. Please try again', {}))
  }
})

module.exports = app
