import React, { useState } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { useHistory } from 'react-router'
import Loading from '../Loading'
import AuthStyles from '../styles/AuthStyles'
import { Row, Col, FormInput, Button } from 'shards-react'
import Copyright from '../Copyright'
const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

async function loginUser(credentials) {
    return fetch('http://localhost:3005/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json())
}

export default function Login({ setToken }) {
    const classes = useStyles()
    const [isLoaded, setIsLoaded] = useState(true)
    const history = useHistory()

    //capture inputs
    const [fields, setFields] = useState({
        email: '',
        password: '',
    })

    const onChange = (e) => {
        setFormError(null)
        const { name, value } = e.target
        setFields({ ...fields, [name]: value })
    }

    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { email, password } = fields
            const token = await loginUser({
                email,
                password,
            })
            console.log('Token: ', token)
            if (token.token && token.name) {
                setToken(token)
                history.push('/dashboard')
            } else {
                if (token.error) {
                    // handle invalid notification
                    setFormError(token.error)
                } else {
                    // all other errors
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    setTimeout(() => {
        setIsLoaded(true)
    }, 1000)

    const { email, password } = fields

    return !isLoaded ? (
        <Loading />
    ) : (
        <main {...{ className: AuthStyles }} component="main">
            <CssBaseline />
            <div className={classes.paper}>
                <img
                    style={{ height: '8rem' }}
                    className={'logo'}
                    src={'/logo.png'}
                    alt="13RMS"
                />
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div className="card_layout">
                        <h3>Sign In</h3>
                        <p>Stay updated on your professional world</p>
                        <Row form>
                            {/* Email */}
                            <Col
                                style={{ marginTop: 40 }}
                                className="form-group"
                            >
                                <FormInput
                                    type="email"
                                    id="feEmail"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={onChange}
                                    autoComplete="email"
                                />
                            </Col>
                            {/* Password */}
                            <div style={{ marginTop: 20 }}></div>
                            <Col className="form-group">
                                <FormInput
                                    type="password"
                                    id="fePassword"
                                    name="password"
                                    placeholder="Password"
                                    onChange={onChange}
                                    autoComplete="current-password"
                                    value={password}
                                    style={{ marginBottom: 10 }}
                                />
                            </Col>

                            <a href="#" className="link-hover forgot-password">
                                Forgot password?
                            </a>
                            <Box
                                textAlign="center"
                                color="red"
                                fontWeight="400"
                                marginTop="0.5rem"
                                marginBottom="0.5rem"
                                style={{ textTransform: 'capitalize' }}
                            >
                                {formError ? formError : null}
                            </Box>
                            <Col className="form-group row footer">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="save-button btn btn-primary btn"
                                >
                                    Sign In
                                </button>
                            </Col>
                        </Row>
                    </div>
                </form>
                <Box textAlign="center" className="join-now mt-2">
                    Not yet on 13RMS?
                    <a href="/signup" className="link-hover log-in-span">
                        {' '}
                        Join now
                    </a>
                </Box>
            </div>
            <Copyright />
        </main>
    )
}
