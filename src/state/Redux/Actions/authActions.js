import * as types from 'state/Redux/constants'
import jwt_decode from 'jwt-decode'

export const logOut = () => async (dispatch) => {
  try {
    // dispatch({ type: types.START_LOADING })
    //   await firebase.auth().signOut()
    dispatch({ type: types.LOGOUT, msg: 'Logged out successfully' })
  } catch (error) {
    console.log(error)
  } finally {
    // dispatch({ type: types.STOP_LOADING })
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

const getAccessToken = () => {
  const token = localStorage.getItem('access_token') || null
  return token
}

export const loadUser = () => (dispatch) => {
  try {
    dispatch({ type: types.LOADER, data: false })

    const access_token = getAccessToken()

    // First check if token is available or not
    // if it is available then check if that object contains necessary data or not
    // if it contains then set user to true
    // else set false
    if (access_token) {
      const decoded = jwt_decode(access_token)

      if (decoded) {
        dispatch({ type: types.IS_LOGGED_IN, data: true })
      } else {
        dispatch({ type: types.IS_LOGGED_IN, data: false })
      }
    } else {
      dispatch({ type: types.IS_LOGGED_IN, data: false })
    }
  } catch (error) {
  } finally {
    dispatch({ type: types.LOADER, data: true })
  }
}
