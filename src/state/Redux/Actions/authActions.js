import * as types from 'state/Redux/constants'

import { getAccessToken, network } from 'helpers'
import { isEmpty } from 'lodash'
import jwt_decode from 'jwt-decode'

export const logOut = (history) => async (dispatch) => {
  try {
    dispatch({ type: types.START_LOADING })

    localStorage.removeItem('access_token')
    history.push('/')
    dispatch({ type: types.SET_USER_DATA, data: {} })
    dispatch({ type: types.LOGOUT, msg: 'Logged out successfully' })
  } catch (error) {
    console.log(error)
  } finally {
    dispatch({ type: types.STOP_LOADING })
  }
}

export const login = (creds) => (dispatch) => {
  // dispatch({ type: types.START_LOADING })
  try {
    // await firebase
    //   .auth()
    //   .signInWithEmailAndPassword(creds.email, creds.password)
    dispatch({ type: types.LOGIN, msg: 'Login successfully' })
  } catch (error) {
    console.log(error)
    dispatch({ type: types.LOGIN_ERR, err: error.message })
  }
}

export const loader = (val) => (dispatch) => {
  dispatch({ type: types.LOADER, data: val })
}

const token = getAccessToken()
const getUser = async () => {
  const { data } = await network.post(
    '/user',
    {},
    {
      headers: { Authorization: token },
    }
  )
  return data
}

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOADER, data: false })

    const user = await getUser()

    if (!isEmpty(user.data)) {
      if (token) {
        var decoded = jwt_decode(token)

        dispatch({
          type: types.SET_USER_DATA,
          data: { ...user.data, myId: decoded.id },
        })
        dispatch({
          type: types.SET_VALUE,
          data: { ...user.data, myId: decoded.id },
        })
      }
    } else {
      dispatch({ type: types.SET_USER_DATA, data: {} })
      dispatch({ type: types.SET_VALUE, data: {} })
    }
  } catch (error) {
  } finally {
    dispatch({ type: types.LOADER, data: true })
  }
}
export const setUser = (user) => async (dispatch) => {
  try {
    if (!isEmpty(user)) {
      var decoded = jwt_decode(token)
      dispatch({
        type: types.SET_USER_DATA,
        data: { ...user, myId: decoded.id },
      })
    }
  } catch (error) {
    console.error(error)
  }
}
