import React, { Component, lazy, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Home from './components/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Loading from './components/Loading'
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
        const themeData = JSON.parse(localStorage.getItem('theme'))
        if (themeData) {
            this.setState({
                ...this.state,
                theme: themeData.theme,
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('theme', JSON.stringify(nextState.theme))
    }

    render() {
        const { theme } = this.state

        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={WelcomeWithLoader} />
                    <Route exact path="/login">
                        <Suspense fallback={<Loading />}>
                            <Login setToken={this.updateToken} />
                        </Suspense>
                    </Route>
                    <Route exact path="/signup" component={SignupWithLoader} />
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
