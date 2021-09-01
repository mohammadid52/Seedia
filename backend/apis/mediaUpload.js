/* eslint-disable quotes */
const router = require('express').Router()
const { responseMsg } = require('../utils')
const multer = require('multer')
var aws = require('aws-sdk')
var multerS3 = require('multer-s3')

aws.config.update({
  secretAccessKey: process.env.S3_ACCESS_KEY,
  accessKeyId: process.env.S3_SECRET_KEY,
  region: 'us-east-1',
  signatureVersion: 'v4',
})

var s3 = new aws.S3()

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'user',
    key: function (req, file, cb) {
      cb(
        'error occurred',
        `${new Date().toLocaleString()}_${file.originalname}`
      )
    },
  }),
})

router.post(
  '/',
  upload.single('image'),
  async (req, res) => {
    res
      .status(202)
      .json(responseMsg('success', 'Uploaded Successfully', req.file))
  },
  (error, req, res, next) => {
    console.error('🚀 ~ file: mediaUpload.js ~ line 39 ~ error', error)
    res.status(400).json(responseMsg('error', error.message))
  }
)

module.exports = router
