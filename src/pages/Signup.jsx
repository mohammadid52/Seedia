import React, { useState } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core/styles'

import Loading from 'components/Loading'

import { Row, Col, FormInput } from 'shards-react'
import Copyright from 'components/Copyright'

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

export default function Signup() {
  const classes = useStyles()
  const [isLoaded, setIsLoaded] = useState(true)
  const [formError, setFormError] = useState(null)

  //capture inputs
  const [fields, setFields] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  })

  const onChange = (e) => {
    setFormError(null)
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const { email, password, firstName, lastName } = fields

  return !isLoaded ? (
    <Loading />
  ) : (
    <main className="" component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <img
          style={{ height: '8rem' }}
          className={'logo'}
          src={'/logo.png'}
          alt="13RMS"
        />
        <form onSubmit={() => {}} className={classes.form}>
          <div className="card_layout">
            <h6 className="create-account text-2xl font-semibold">
              Discover the benefits of selling and networking with your profile
            </h6>
            <div className="mb-2">
              <button
                type="button"
                className="business-account btn btn-primary btn-md"
              >
                Create a business account
              </button>
            </div>
            <div className="mb-2">
              <button
                type="button"
                className="student-account btn btn-primary btn-md"
              >
                Create a student account
              </button>
            </div>

            <Row form>
              {/* Name */}
              <Col style={{ marginTop: 40 }} className="form-group">
                <div style={{ display: 'flex' }}>
                  <Col
                    style={{
                      paddingLeft: 0,
                      paddingRight: '0.5rem',
                    }}
                  >
                    <FormInput
                      type="name"
                      id="fname"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={onChange}
                      autoComplete="name"
                    />
                  </Col>
                  <Col
                    style={{
                      paddingRight: 0,
                      paddingLeft: '0.5rem',
                    }}
                  >
                    <FormInput
                      type="name"
                      id="lname"
                      name="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={onChange}
                      autoComplete="name"
                    />
                  </Col>
                </div>
              </Col>
              {/* Email */}
              <Col style={{ marginTop: 20 }} className="form-group">
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

              <Col
                style={{ marginTop: 20, marginBottom: 10 }}
                className="form-group"
              >
                <FormInput
                  type="password"
                  id="fePassword"
                  name="password"
                  placeholder="Password"
                  onChange={onChange}
                  autoComplete="current-password"
                  value={password}
                />
              </Col>

              <p className="agreement">
                <span>By clicking Agree and Join, you agree to 13RMS </span>
                <a className="link-hover" href="/#">
                  User Agreement
                </a>
                <span>, </span>
                <a className="link-hover" href="/#">
                  Privacy Policy
                </a>{' '}
                <span>and </span>{' '}
                <a className="link-hover" href="/#">
                  Cookie Policy
                </a>{' '}
                <span>.</span>
              </p>
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
                  // onClick={handleSubmit}
                  className="save-button btn btn-primary btn"
                >
                  Agree and become a member
                </button>
              </Col>
              <Box textAlign="center" className="mb-3 mt-2">
                Already on 13RMS?
                <a href="/login" className="link-hover log-in-span">
                  {' '}
                  Log in here
                </a>
              </Box>
            </Row>
          </div>
        </form>
      </div>
      <Copyright />
    </main>
  )
}
