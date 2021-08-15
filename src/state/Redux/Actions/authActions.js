import * as types from 'state/Redux/constants'
import { links } from 'constants/Links'
import { network } from 'helpers'
import { isEmpty } from 'lodash'

export const logOut = (history) => async (dispatch) => {
  try {
    dispatch({ type: types.START_LOADING })

    localStorage.removeItem('access_token')
    history.push('/')
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

const getUser = async () => {
  const { data } = await network.post('/user')
  return data
}

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOADER, data: false })

    const user = await getUser()
    console.log('🚀 ~ file: authActions.js ~ line 47 ~ loadUser ~ user', user)
    if (!isEmpty(user)) {
      dispatch({ type: types.IS_LOGGED_IN, data: user })
    } else {
      dispatch({ type: types.IS_LOGGED_IN, data: {} })
    }
  } catch (error) {
  } finally {
    dispatch({ type: types.LOADER, data: true })
  }
}
