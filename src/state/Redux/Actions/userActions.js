import { isEmpty } from 'lodash'
import * as types from 'state/Redux/constants'

export const setUser = (user) => async (dispatch) => {
  try {
    if (!isEmpty(user)) {
      console.log('@setUser: User set successfully: ', user)
      dispatch({ type: types.SET_USER_DATA, data: user })
    }
  } catch (error) {
    console.error(error)
  }
}
