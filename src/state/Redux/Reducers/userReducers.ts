const initialState = {
  values: {},
}

const userReducer = (
  state = initialState,
  action: { type: any; msg: any; err: any; data: any }
) => {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer
