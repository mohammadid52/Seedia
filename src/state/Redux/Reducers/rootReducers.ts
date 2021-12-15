import { combineReducers } from 'redux'
import authReducer from 'state/Redux/Reducers/authReducers'
import userReducer from 'state/Redux/Reducers/userReducers'
import storeReducer from 'state/Redux/Reducers/storeReducers'

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  store: storeReducer,
})
