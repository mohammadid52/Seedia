import axios from 'axios'
import { links } from 'constants/Links'
import get from 'lodash/get'

export const getAuth = (state: any) => get(state, 'auth', {})
export const getUserValues = (state: any) => get(state, 'auth.user', {})

const getAccessToken = () => {
  const token = localStorage.getItem('access_token') || null
  return token
}

const token = getAccessToken()

export const network = axios.create({
  baseURL: links.BASE_API_URL,
  timeout: 1000,
  headers: { Authorization: token },
})
