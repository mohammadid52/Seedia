import { combineReducers } from 'redux'
import authReducer from 'state/Redux/Reducers/authReducers'
import userReducer from 'state/Redux/Reducers/userReducers'

export default combineReducers({
  auth: authReducer,
  // user: userReducer,
})
