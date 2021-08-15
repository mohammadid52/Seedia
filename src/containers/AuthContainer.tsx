import Loading from 'components/Loading'
import { getAuth } from 'helpers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadUser } from 'state/Redux/Actions/authActions'

const AuthContainer = ({ children }: any) => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => getAuth(state))

  useEffect(() => {
    // this will load user authorization
    dispatch(loadUser())
  }, [dispatch])

  if (auth.loaded) {
    return <div>{children}</div>
  } else {
    return <Loading />
  }
}

export default AuthContainer
