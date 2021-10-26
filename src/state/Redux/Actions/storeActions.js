export const changeStoreValues = (fieldName, value) => (dispatch) => {
  dispatch({
    type: 'change-value',
    data: { fieldName: fieldName, value: value },
  })
}
