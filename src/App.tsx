import { lazy, useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { IParent } from 'interfaces/UniversalInterface'
import Dashboard from 'pages/dashboard'
import NotFound from 'pages/NotFound'
import BusinessStepOne from 'pages/account/business/StepOne'
import BusinessStepTwo from 'pages/account/business/StepTwo'
import ChooseAccount from 'pages/account/other/ChooseAccount'
import { useUserContext } from 'context/UserContext'
import ProfileTwo from 'pages/profile/ProfileTwo'
import DashboardHeader from 'pages/DashboardHeader'
import { useRouter } from 'hooks/useRouter'
import Navigation from 'components/Navigation'

import { isEmpty } from 'lodash'
import PrivateRoute from 'routes/PrivateRoute'
import AuthContainer from 'containers/AuthContainer'
import { getUserValues } from 'helpers'
import { useSelector } from 'react-redux'
import { links } from 'constants/Links'
import { profileOne, profileTwo } from 'values/values'

const Welcome = lazy(() => import('pages/Welcome'))
const Profile = lazy(() => import('pages/profile/ProfileOne'))
const Signup = lazy(() => import('pages/Signup'))
const Login = lazy(() => import('pages/Login'))
const CompanyStep = lazy(() => import('pages/account/personal/CompanyStep'))
const LocationStep = lazy(() => import('pages/account/personal/LocationStep'))
const EducationStep = lazy(() => import('pages/account/student/EducationStep'))

library.add(fas)

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

  /**
   * collection of pages to hide the navbar
   */
  const publicKeywords = [
    '/account',
    'edit-profile', // eg, if path contains 'edit-profile' then hide the navbar
    '/login',
    '/signup',
    '/choose-account',
  ]

  const RenderNav = ({
    isUser,
    user,
    accountFilled,
  }: {
    isUser?: any
    user: any
    accountFilled?: boolean
  }) => {
    const router = useRouter()

    const atHome = router.pathname === '/'
    const atAuthPages = publicKeywords.indexOf(router.pathname) !== -1

    return atHome ? (
      <Navigation isUser={isUser} accountFilled={accountFilled} />
    ) : atAuthPages ? null : (
      <DashboardHeader user={user} about={profileOne.about} />
    )
  }

  const values = useSelector((state) => getUserValues(state))

  const accountFilled: boolean | undefined = values?.other?.accountFilled
  const accountFinishedStep: string | undefined =
    values?.other?.accountFinishedStep
  const isUser = !isEmpty(values)

  const userData: IParent = isUser ? values : undefined

  return (
    <Router>
      <AuthContainer>
        <div className="">
          <RenderNav
            accountFilled={accountFilled}
            user={userData}
            isUser={isUser}
          />
          <Switch>
            {/* This is common page */}
            <Route exact path="/" component={Welcome} />

            {/* @ts-ignore */}
            <PrivateRoute isPublic isUser={isUser} exact path="/login">
              <Login />
            </PrivateRoute>

            <PrivateRoute
              isPublic
              isUser={isUser}
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
              <Dashboard user={profileOne} />
            </PrivateRoute>
            <PrivateRoute
              isUser={isUser}
              // @ts-ignore
              exact
              path="/profile/:userId/template=1"
            >
              <Profile userData={userData} user={profileOne} />
            </PrivateRoute>
            <PrivateRoute
              isUser={isUser}
              // @ts-ignore
              exact
              path="/profile/:userId/template=2"
            >
              {/* @ts-ignore */}
              <ProfileTwo userData={userData} user={profileTwo} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isUser={accountFinishedStep !== 'chooseAccount'}
              path="/choose-account"
            >
              <ChooseAccount user={userData} />
            </PrivateRoute>
            {/* <Route exact path="/email-verification" component={EmailVerification} /> */}

            {/* Personal Account routes */}
            <PrivateRoute
              // @ts-ignore
              path={links.PERSONAL_STEP_1}
              isUser={isUser}
            >
              <CompanyStep user={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              path={links.PERSONAL_STEP_2}
              isUser={isUser}
            >
              <LocationStep user={userData} accountType="personal" />
            </PrivateRoute>

            {/* Student Account routes */}
            <PrivateRoute
              // @ts-ignore
              path={links.STUDENT_STEP_1}
              isUser={isUser}
            >
              <EducationStep user={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              path={links.STUDENT_STEP_2}
              isUser={isUser}
            >
              <LocationStep user={userData} accountType="student" />
            </PrivateRoute>

            {/* Business Account routes */}
            <PrivateRoute
              // @ts-ignore
              path={links.BUSINESS_STEP_1}
              isUser={isUser}
            >
              <BusinessStepOne user={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              path={links.BUSINESS_STEP_2}
              isUser={isUser}
            >
              <BusinessStepTwo user={userData} />
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
