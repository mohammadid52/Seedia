import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Home from './components/index'
import Welcome from './Welcome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Profile from './components/pages/profile/Profile'

library.add(fas)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { theme: 'light', token: null } // Init token to hold user data
    this.themeToggler = this.themeToggler.bind(this)
    this.updateToken = this.updateToken.bind(this)
  }

  themeToggler = (value) => {
    this.setState({ ...this.state, theme: value})
  }

  updateToken = (newToken) => {
    localStorage.setItem('token',JSON.stringify(newToken))
    this.setState({...this.state, token: newToken})
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

        <Route exact path='/' component={Welcome} />
        <Route exact path='/sign-in'>
          <Login setToken={this.updateToken}/>
        </Route>
        <Route exact path='/sign-up' component={Signup} />
        <Route exact path='/profile' component={Profile} />
        
      </Switch>
    </Router>
     
    )
  }
}

export default App
