import React, { Component, lazy, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from 'react-router-dom'
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

const NotFound = () => {
    const history = useHistory()
    return (
        <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="max-w-max mx-auto">
                <main className="sm:flex">
                    <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
                        404
                    </p>
                    <div className="sm:ml-6">
                        <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                                Page not found
                            </h1>
                            <p className="mt-1 text-base text-gray-500">
                                Please check the URL in the address bar and try
                                again.
                            </p>
                        </div>
                        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                            <a
                                href="/"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Go back home
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Contact support
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

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
                        path="/dashboard"
                        component={SignupWithLoader}
                    />
                    <Route
                        exact
                        path="/profile"
                        component={ProfileWithLoader}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default App
