import React, { Component, lazy, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from 'components/Loading'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'

const Welcome = lazy(() => import('pages/Welcome'))
const Profile = lazy(() => import('pages/profile/Profile'))
const Signup = lazy(() => import('pages/Signup'))
const Login = lazy(() => import('pages/Login'))
const PersonalSecondStep = lazy(() =>
  import('pages/account/personal/PersonalSecondStep')
)
const PersonalLastStep = lazy(() =>
  import('pages/account/personal/LastPersonalStep')
)

library.add(fas)

const WelcomeWithLoader = () => (
  <Suspense fallback={<Loading />}>
    <Welcome />
  </Suspense>
)
const ProfileWithLoader = () => (
  <Suspense fallback={<Loading />}>
    <Profile />
  </Suspense>
)
const SignupWithLoader = () => (
  <Suspense fallback={<Loading />}>
    <Signup />
  </Suspense>
)
const PersonalSecondStepWithLoader = () => (
  <Suspense fallback={<Loading />}>
    <PersonalSecondStep />
  </Suspense>
)
const PersonalLastStepWithLoader = () => (
  <Suspense fallback={<Loading />}>
    <PersonalLastStep />
  </Suspense>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { theme: 'light', token: null } // Init token to hold user data
    this.themeToggler = this.themeToggler.bind(this)
    this.updateToken = this.updateToken.bind(this)
  }

  themeToggler = (value) => {
    this.setState({ ...this.state, theme: value })
  }

  updateToken = (newToken) => {
    localStorage.setItem('token', JSON.stringify(newToken))
    this.setState({ ...this.state, token: newToken })
  }

  componentDidMount() {
    try {
      const themeData = JSON.parse(
        localStorage.getItem('theme') || { theme: 'light' }
      )
      if (themeData) {
        this.setState({
          ...this.state,
          theme: themeData.theme,
        })
      }
    } catch (err) {}
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('theme', JSON.stringify(nextState.theme))
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomeWithLoader} />
          <Route exact path="/login">
            <Suspense fallback={<Loading />}>
              <Login theme={this.state.theme} setToken={this.updateToken} />
            </Suspense>
          </Route>
          <Route exact path="/signup" component={SignupWithLoader} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            path="/account/personal/edit-profile/company"
            component={PersonalSecondStepWithLoader}
          />
          <Route
            path="/account/personal/edit-profile/location"
            component={PersonalLastStepWithLoader}
          />
          <Route exact path="/profile" component={ProfileWithLoader} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
