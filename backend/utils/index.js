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
const getManyItems = async (collection, condition) => {
  return await collection
    .find({
      ...condition,
    })
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

module.exports = {
  responseMsg,
  unique,
  addObjectId,
  getItem,
  getManyItems,
  updateData,
}
