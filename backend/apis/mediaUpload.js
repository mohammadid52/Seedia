/* eslint-disable quotes */
const router = require('express').Router()
const { responseMsg } = require('../utils')
const multer = require('multer')
var aws = require('aws-sdk')
var multerS3 = require('multer-s3')

aws.config.update({
  secretAccessKey: process.env.S3_SECRET_KEY,
  accessKeyId: process.env.S3_ACCESS_KEY,
  region: 'us-east-2',
})

var s3 = new aws.S3()

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: '13rmsusers',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`)
    },
  }),
})

router.post('/', upload.single('image'), function (req, res) {
  res.json(responseMsg('success', 'Uploaded Successfully', req.file))
})

module.exports = router
