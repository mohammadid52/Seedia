import React, { lazy, useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Loading from 'components/Loading'
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

// import BusinessStepTwo from 'pages/account/business/StepTwo'

const Welcome = lazy(() => import('pages/Welcome'))
const Profile = lazy(() => import('pages/profile'))
const Signup = lazy(() => import('pages/Signup'))
const Login = lazy(() => import('pages/Login'))
const PersonalSecondStep = lazy(
  () => import('pages/account/personal/CompanyStep')
)
const LocationStep = lazy(() => import('pages/account/personal/LocationStep'))
const EducationStep = lazy(() => import('pages/account/student/EducationStep'))

library.add(fas)

const App = () => {
  const { setDarkMode, setIsLoggedIn } = useUserContext()

  // #1 Fetch values from local storage
  // #2 If value is not undefined setIsLoggedIn to true;
  // #3 Otherwise setIsLoggedIn to false

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

  const [user, setUser] = useState({})
  const [accountInfo, setAccountInfo] = useState({})

  useEffect(() => {
    const fetchAccountType = () =>
      window.localStorage.getItem('accountType') || 'Personal'

    const fetchUserInfo = () => {
      const json: any = window.localStorage.getItem('user')
      return JSON.parse(json) || {}
    }

    const fetchAccountInfo = () => {
      const accountType = fetchAccountType().toLocaleLowerCase()
      const json: any = window.localStorage.getItem(accountType)
      return JSON.parse(json) || {}
    }

    const user = fetchUserInfo()
    const accountInfo = fetchAccountInfo()
    // if (filter(values(user), (d) => Boolean(d)).length > 0) {
    setIsLoggedIn(true)
    // } else {
    // setIsLoggedIn(false)
    // }

    setUser({ ...user })
    setAccountInfo({ ...accountInfo })

    return () => {
      fetchUserInfo()
      fetchAccountInfo()
    }
  }, [setIsLoggedIn])

  const RenderNav = () => {
    const router = useRouter()
    const atHome = router.pathname === '/'
    const atAuthPages =
      router.pathname.includes('account') ||
      router.pathname.includes('edit-profile')
    return atHome ? <Navigation /> : atAuthPages ? null : <DashboardHeader />
  }

  return (
    <Router>
      <RenderNav />
      <Switch>
        {/* This is common page */}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login">
          <Login setToken={() => {}} />
        </Route>

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard">
          <Dashboard user={user} accountInfo={accountInfo} />
        </Route>
        <Route exact path="/profile/1" component={Profile} />
        <Route exact path="/profile/2" component={ProfileTwo} />
        <Route exact path="/choose-account" component={ChooseAccount} />
        {/* <Route exact path="/email-verification" component={EmailVerification} /> */}

        {/* Personal Account routes */}
        <Route
          path="/account/personal/edit-profile/company"
          component={PersonalSecondStep}
        />
        <Route path="/account/personal/edit-profile/location">
          <LocationStep accountType="personal" />
        </Route>

        {/* Student Account routes */}
        <Route
          path="/account/student/edit-profile/education"
          component={EducationStep}
        />
        <Route path="/account/student/edit-profile/location">
          <LocationStep accountType="student" />
        </Route>

        {/* Business Account routes */}
        <Route
          path="/account/business/edit-profile/stepOne"
          component={BusinessStepOne}
        />
        <Route
          path="/account/business/edit-profile/stepTwo"
          component={BusinessStepTwo}
        />

        {/* Error Page */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
