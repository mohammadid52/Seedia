var ObjectId = require('mongodb').ObjectId

const responseMsg = (status = 'none', message = '', data = {}) => {
  return { status, message, data }
}

const unique = (list) => [...new Set(list)]

const addObjectId = (id) => ObjectId(id)

const getItem = async (collection, targetId) => {
  return await collection.findOne({
    _id: ObjectId(targetId),
  })
}
const getManyItems = async (collection, condition, projection = {}) => {
  return await collection
    .find({
      ...condition,
    })
    .project({ ...projection })
    .toArray()
}
const updateData = async (collection, id, newData) => {
  await collection.updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        ...newData,
      },
    },
    { new: true }
  )
}

const shortUser = {
  _id: 1,
  fullName: 1,
  firstName: 1,
  lastName: 1,
  coverPicture: 1,
  profileUrl: 1,
  profilePicture: 1,
  other: 1,
  email: 1,
}

module.exports = {
  responseMsg,
  unique,
  addObjectId,
  getItem,
  getManyItems,
  updateData,
  shortUser,
}
