import { isEmpty } from 'lodash'
import * as types from 'state/Redux/constants'

export const setUser = (user) => async (dispatch) => {
  try {
    if (!isEmpty(user)) {
      dispatch({ type: types.SET_USER_DATA, data: user })
    }
  } catch (error) {
    console.error(error)
  }
}

export const addToBasket = (product) => async (dispatch) => {
  dispatch({ type: types.ADD_TO_BASKET, data: product })
}
export const removeFromBasket = (product) => async (dispatch) => {
  dispatch({ type: types.REMOVE_FROM_BASKET, data: product })
}
