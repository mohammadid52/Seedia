/* eslint-disable quotes */
const router = require('express').Router()
const { responseMsg } = require('../utils')
const multer = require('multer')
const path = require('path')

const imageStorage = multer.diskStorage({
  destination: 'public/images',
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    )
  },
})

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error('Please upload a Image'))
    }
    cb(undefined, true)
  },
})

router.post(
  '/',
  imageUpload.single('image'),
  async (req, res) => {
    res
      .status(202)
      .json(responseMsg('success', 'Uploaded Successfully', req.file))
  },
  (error, req, res, next) => {
    res.status(400).json(responseMsg('error', error.message))
  }
)

module.exports = router
