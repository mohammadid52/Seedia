const initialState = {
  buttonLabel: '',
  buttonLink: '',
  products: [{}],
}

const storeReducer = (
  state = initialState,
  action: { type: any; msg: any; err: any; data: any }
) => {
  switch (action.type) {
    case 'change-value':
      return { ...state, [action.data.fieldName]: action.data.value }

    default:
      return state
  }
}

export default storeReducer
