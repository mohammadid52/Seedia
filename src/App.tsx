import { links } from 'constants/Links'
import AuthContainer from 'containers/AuthContainer'
import { useUserContext } from 'context/UserContext'
import { getUserValues } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { isEmpty } from 'lodash'
import BusinessStepOne from 'pages/account/business/StepOne'
import BusinessStepTwo from 'pages/account/business/StepTwo'
import ChooseAccount from 'pages/account/other/ChooseAccount'
import ChooseTemplate from 'pages/account/other/ChooseTemplate'
import Dashboard from 'pages/dashboard'
import ForgotPassword from 'pages/ForgotPassword'
import Home from 'pages/home/Home'
import NotFound from 'pages/NotFound'
import ProfileTwo from 'pages/profile/ProfileTwo'
import ResetPassword from 'pages/ResetPassword'
import { lazy, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'routes/PrivateRoute'

const Profile = lazy(() => import('pages/profile/ProfileOne'))
const Signup = lazy(() => import('pages/Signup'))
const Login = lazy(() => import('pages/Login'))
const CompanyStep = lazy(() => import('pages/account/personal/CompanyStep'))
const LocationStep = lazy(() => import('pages/account/personal/LocationStep'))
const EducationStep = lazy(() => import('pages/account/student/EducationStep'))
const Settings = lazy(() => import('pages/Settings'))

const App = () => {
  const { setDarkMode } = useUserContext()

  useEffect(() => {
    const loadTheme = () => {
      const theme = localStorage.getItem('theme')

      const html = document.querySelector('html')

      if (theme) {
        if (theme === 'dark') {
          setDarkMode(true)
          html?.classList.add('dark')
        } else {
          setDarkMode(false)
          html?.classList.remove('dark')
        }
      }
    }
    loadTheme()
    return () => loadTheme()
  }, [setDarkMode])

  const [userData, setUserData] = useState<IParent>()

  const values = useSelector((state) => getUserValues(state))

  useEffect(() => {
    if (values) {
      setUserData(values)
    }
  }, [values, window.location.pathname])

  const accountFilled: boolean | undefined =
    userData?.other?.accountFilled || false

  const isUser = !isEmpty(userData)

  const template = userData?.other?.template || 1

  const navProps = {
    isUser,
    profileUrl: userData?.profileUrl,
    template,
    accountFilled,
  }

  return (
    <Router>
      <AuthContainer>
        <div className="">
          <Switch>
            {/* This is common page */}
            <Route exact path="/">
              <Home {...navProps} />
            </Route>

            {/* @ts-ignore */}
            <PrivateRoute isPublic exact path="/login">
              <Login />
            </PrivateRoute>

            {/* @ts-ignore */}
            <PrivateRoute isPublic exact path="/reset-password/:token">
              <ResetPassword />
            </PrivateRoute>

            <PrivateRoute
              isPublic
              // @ts-ignore
              exact
              path="/signup"
            >
              <Signup />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isUser={isUser}
              path="/dashboard"
            >
              {/* @ts-ignore */}
              <Dashboard {...navProps} userData={userData} />
            </PrivateRoute>
            <PrivateRoute
              isUser={isUser}
              // @ts-ignore
              exact
              path="/:userId/:template/:viewMode"
            >
              {template === 1 ? (
                // @ts-ignore
                <Profile userData={userData} />
              ) : (
                // @ts-ignore
                <ProfileTwo userData={userData} />
              )}
            </PrivateRoute>

            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path="/choose-account"
            >
              <ChooseAccount user={userData} />
            </PrivateRoute>
            {/* <Route exact path="/email-verification" component={EmailVerification} /> */}

            {/* Personal Account routes */}
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.COMPANY}
            >
              <CompanyStep user={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.LOCATION_P}
            >
              <LocationStep user={userData} />
            </PrivateRoute>

            {/* Student Account routes */}
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.EDUCATION}
            >
              <EducationStep user={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.LOCATION_S}
            >
              <LocationStep user={userData} />
            </PrivateRoute>

            {/* Business Account routes */}
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.BUSINESS_STEP_1}
            >
              {/* @ts-ignore */}
              <BusinessStepOne userData={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.BUSINESS_STEP_2}
            >
              {/* @ts-ignore */}
              <BusinessStepTwo userData={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.CHOOSE_TEMPLATE}
            >
              {/* @ts-ignore */}
              <ChooseTemplate user={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.FORGOT_PASSWORD}
            >
              {/* @ts-ignore */}
              <ForgotPassword />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              path={links.SETTINGS}
              isUser={isUser}
            >
              {/* @ts-ignore */}
              <Settings userData={userData} />
            </PrivateRoute>

            {/* Error Page */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </AuthContainer>
    </Router>
  )
}

export default App
