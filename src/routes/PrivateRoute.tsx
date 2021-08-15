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
  component: Component = null,
  ...rest
}: {
  isPublic: boolean
  isUser: boolean
  children: any
  component?: any
}) => {
  const onPublic = (isuser: boolean) => {
    if (isuser) {
      return <Redirect to="/dashboard" />
    } else {
      return Component ? Component : children
    }
  }
  const onPrivate = (isuser: boolean) => {
    if (isuser) {
      return Component ? Component : children
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
