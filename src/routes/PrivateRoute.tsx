import { Route, Redirect } from 'react-router-dom'

/**
 * @isPublic - can public see this page without login?
 * @isUser - is user logged in?
 * @WhatItDoes - This component will return user to login page if they are not logged in.
 * and if they are logged in then it will just return the passed component
 */
const PrivateRoute = ({
  isPublic = false,
  children,
  isUser,
  ...rest
}: {
  isPublic: boolean
  isUser: boolean
  children: any
}) => {
  const onPublic = (isuser: boolean) => {
    if (isuser) {
      return <Redirect to="/dashboard" />
    } else {
      return children
    }
  }
  const onPrivate = (isuser: boolean) => {
    if (isuser) {
      return children
    } else {
      return <Redirect to="/login" />
    }
  }

  if (isPublic) {
    return <Route {...rest} render={() => onPublic(isUser)} />
  } else {
    return <Route {...rest} render={() => onPrivate(isUser)} />
  }
}

export default PrivateRoute
