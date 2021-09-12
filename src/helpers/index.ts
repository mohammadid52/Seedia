import axios from 'axios'
import { links } from 'constants/Links'
import get from 'lodash/get'

export const getAuth = (state: any) => get(state, 'auth', {})
export const getUserValues = (state: any) => get(state, 'auth.user', {})
export const getOtherUserValues = (state: any) =>
  get(state, 'auth.otherUser', {})

export const getAccessToken = () => {
  const token = localStorage.getItem('access_token') || null
  return token
}

export const getUniqId = (str?: string) => {
  if (str) {
    const arr = str.split('_')
    return arr[arr.length - 1]
  }
}

const token = getAccessToken()

export const network = axios.create({
  baseURL: links.BASE_API_URL,
  timeout: 100000,
  headers: { Authorization: token },
})

export const renderPathByType = (type: string) => {
  switch (type) {
    case 'personal':
      return links.COMPANY

    case 'student':
      return links.EDUCATION

    case 'business':
      return links.BUSINESS_STEP_1

    default:
      return links.COMPANY
  }
}

export const updateDocumentTitle = (title: string) => {
  if (window.document) {
    document.title = title
  }
}
