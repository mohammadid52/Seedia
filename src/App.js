import React, { Component, lazy, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from './components/Loading'
import Dashboard from './components/pages/Dashboard'

const Welcome = lazy(() => import('./Welcome'))
const Profile = lazy(() => import('./components/pages/profile/Profile'))
const Signup = lazy(() => import('./components/pages/Signup'))
const Login = lazy(() => import('./components/pages/Login'))

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
                        exact
                        path="/profile"
                        component={ProfileWithLoader}
                    />
                </Switch>
            </Router>
        )
    }
}

export default App
