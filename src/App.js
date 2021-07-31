import React, { lazy } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Loading from 'components/Loading'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import BusinessStepOne from 'pages/account/business/StepOne'
import BusinessStepTwo from 'pages/account/business/StepTwo'
import ChooseAccount from 'pages/account/other/ChooseAccount'
// import BusinessStepTwo from 'pages/account/business/StepTwo'

const Welcome = lazy(() => import('pages/Welcome'))
const Profile = lazy(() => import('pages/profile/Profile'))
const Signup = lazy(() => import('pages/Signup'))
const Login = lazy(() => import('pages/Login'))
const PersonalSecondStep = lazy(() =>
  import('pages/account/personal/CompanyStep')
)
const PersonalLastStep = lazy(() =>
  import('pages/account/personal/LocationStep')
)
const EducationStep = lazy(() => import('pages/account/student/EducationStep'))
const LocationStep = lazy(() => import('pages/account/student/LocationStep'))
const EmailVerification = lazy(() =>
  import('pages/account/other/EmailVerification')
)

library.add(fas)

// const Loader = ({ children }) => {
//   return <Suspense fallback={<Loading />}>{children}</Suspense>
// }

const App = () => {
  return (
    <Router>
      <Switch>
        {/* This is common page */}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login">
          <Login theme={'light'} setToken={() => {}} />
        </Route>

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/choose-account" component={ChooseAccount} />
        <Route exact path="/email-verification" component={EmailVerification} />

        {/* Personal Account routes */}
        <Route
          path="/account/personal/edit-profile/company"
          component={PersonalSecondStep}
        />
        <Route
          path="/account/personal/edit-profile/location"
          component={PersonalLastStep}
        />

        {/* Student Account routes */}
        <Route
          path="/account/student/edit-profile/education"
          component={EducationStep}
        />
        <Route
          path="/account/student/edit-profile/location"
          component={LocationStep}
        />

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
