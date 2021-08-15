import { useSelector } from 'react-redux'
import { getAuth } from 'helpers'
import Loading from 'components/Loading'

const AuthWrapper = ({ children }: { children: any }): any => {
  const { loaded } = useSelector((state) => getAuth(state))

  if (!loaded) {
    return <Loading />
  }
  return children
}

export default AuthWrapper
