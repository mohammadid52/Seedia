/* eslint-disable quotes */
const router = require('express').Router()

const { responseMsg } = require('../utils')

const SibApiV3Sdk = require('sib-api-v3-sdk')
let defaultClient = SibApiV3Sdk.ApiClient.instance

let apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = 'YOUR API KEY'

let apiInstance = new SibApiV3Sdk.EmailCampaignsApi()

let opts = {
  type: 'classic',
  status: 'sent',
  startDate: new Date('2021-01-01T00:00:00+00:00'),
  endDate: new Date('2021-01-01T00:00:00+00:00'),
  limit: 500,
  offset: 0,
}
apiInstance.getEmailCampaigns(opts).then(
  function (data) {
    console.log(
      'API called successfully. Returned data: ' + JSON.stringify(data)
    )
  },
  function (error) {
    console.error(error)
  }
)

router.post('/', async (req, res) => {})

module.exports = router
