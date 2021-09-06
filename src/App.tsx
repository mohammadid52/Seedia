import { lazy, useEffect, useState } from 'react'
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
import ChooseTemplate from 'pages/account/other/ChooseTemplate'
import ForgotPassword from 'pages/ForgotPassword'

const Welcome = lazy(() => import('pages/Welcome'))
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
    accountFilled,
    template,
  }: {
    isUser?: any
    accountFilled?: boolean
    template: 1 | 2
  }) => {
    const router = useRouter()

    const atHome = router.pathname === '/'
    const atAuthPages = publicKeywords.indexOf(router.pathname) !== -1

    return atHome ? (
      <Navigation
        userId={userData?.profileUrl}
        isUser={isUser}
        template={template}
        accountFilled={accountFilled}
      />
    ) : atAuthPages ? null : (
      <DashboardHeader userData={userData} />
    )
  }

  const [userData, setUserData] = useState<IParent>()

  const values = useSelector((state) => getUserValues(state))

  useEffect(() => {
    if (values) {
      setUserData(values)
    }
  }, [values, window.location.pathname])

  const accountFilled: boolean | undefined =
    userData?.other?.accountFilled || false

  const accountFinishedStep: string | undefined =
    userData?.other?.accountFinishedStep
  const isUser = !isEmpty(userData)

  const template = userData?.other?.template || 1

  return (
    <Router>
      <AuthContainer>
        <div className="">
          <RenderNav
            template={template}
            accountFilled={accountFilled}
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
              isUser={accountFilled && accountFinishedStep === 'signup'}
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
              <Dashboard userData={userData} />
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
              isUser={accountFilled && accountFinishedStep === 'chooseAccount'}
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
              path={links.PERSONAL_STEP_1}
              isUser={accountFilled && accountFinishedStep === 'company'}
            >
              <CompanyStep user={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.PERSONAL_STEP_2}
              isUser={accountFilled && accountFinishedStep === 'location'}
            >
              <LocationStep user={userData} accountType="personal" />
            </PrivateRoute>

            {/* Student Account routes */}
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.STUDENT_STEP_1}
              isUser={accountFilled && accountFinishedStep === 'education'}
            >
              <EducationStep user={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.STUDENT_STEP_2}
              isUser={accountFilled && accountFinishedStep === 'location'}
            >
              <LocationStep user={userData} accountType="student" />
            </PrivateRoute>

            {/* Business Account routes */}
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.BUSINESS_STEP_1}
              isUser={
                accountFilled && accountFinishedStep === 'business-step-1'
              }
            >
              {/* @ts-ignore */}
              <BusinessStepOne userData={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.BUSINESS_STEP_2}
              isUser={
                accountFilled && accountFinishedStep === 'business-step-2'
              }
            >
              {/* @ts-ignore */}
              <BusinessStepTwo userData={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isPublic
              path={links.CHOOSE_TEMPLATE}
              isUser={accountFilled && accountFinishedStep === 'chooseTemplate'}
            >
              {/* @ts-ignore */}
              <ChooseTemplate user={userData} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
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
