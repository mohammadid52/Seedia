import * as types from 'state/Redux/constants'

const initialState = {
  values: {},
}

const userReducer = (
  state = initialState,
  action: { type: any; msg: any; err: any; data: any }
) => {
  switch (action.type) {
    case types.SET_VALUE:
      return {
        ...state,
        values: action.data,
      }

    default:
      return state
  }
}

export default userReducer
