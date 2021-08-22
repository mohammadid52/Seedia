import * as types from 'state/Redux/constants'

export const setValues = (data) => (dispatch) => {
  dispatch({ type: types.SET_VALUE, data })
}
