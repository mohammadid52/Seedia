import axios from 'axios'
import { links } from 'constants/Links'
import { getAccessToken } from 'helpers'

const token = getAccessToken()

const network = axios.create({
  baseURL: links.BASE_API_URL,
  timeout: 1000,
  headers: { Authorization: token },
})

export default network
