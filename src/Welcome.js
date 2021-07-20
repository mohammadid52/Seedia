import React, { Component } from 'react'
import Home from './components/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = { theme: 'light' }
        this.themeToggler = this.themeToggler.bind(this)
    }

    themeToggler = (value) => {
        this.setState({ theme: value })
    }

    componentDidMount() {
        const themeData = JSON.parse(localStorage.getItem('theme')) || {
            theme: 'light',
        }
        if (themeData) {
            this.setState({
                theme: themeData.theme,
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('theme', JSON.stringify(nextState || 'light'))
    }

    render() {
        const { theme } = this.state

        return <Home {...{ themeToggler: this.themeToggler, theme }} />
    }
}
