import { combineReducers } from 'redux'
import authReducer from 'state/Redux/Reducers/authReducers'

export default combineReducers({
  auth: authReducer,
  // user: userReducer,
})
