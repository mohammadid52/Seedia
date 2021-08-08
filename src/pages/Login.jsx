import React, { useState } from 'react'

import { useHistory } from 'react-router'
import Loading from 'components/Loading'
import Button from 'components/atoms/Button'
import Layout from 'containers/Layout'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { LOGIN } from 'initials'
import FormInput from 'components/atoms/FormInput'

async function loginUser(credentials) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}

const Login = ({ setToken }) => {
  const [isLoaded, setIsLoaded] = useState(true)
  const history = useHistory()

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Please add email address'),
    password: Yup.string().required('Please add password').min(6).max(20),
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (_values) => {
    setLoading(true)
    const { email, password } = _values
    try {
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
          // setFormError(token.error)
        } else {
          // all other errors
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  return !isLoaded ? (
    <Loading />
  ) : (
    <Layout
      title="Sign in to your account"
      subtitle={
        <p className="mt-1 text-center dark:text-gray-400 text-sm text-gray-600">
          Stay updated on your professional world
        </p>
      }
    >
      <div className="mt-8 mb-36 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={onChange}
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={onChange}
                  value={password}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {formError ? formError : null}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#/" className="font-medium link-hover">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button
                onClick={handleSubmit}
                fullWidth
                rounded="rounded-lg"
                gradient
                label="Sign in"
              />
            </div>
          </form> */}

          <Formik
            initialValues={LOGIN}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <FormInput label="Email" id="email" name="email" required />

              <FormInput
                label="password"
                id="password"
                name="password"
                required
                showPasswordButton
              />

              <div>
                <Button
                  type="submit"
                  fullWidth
                  rounded="rounded-lg"
                  gradient
                  loading={loading}
                  label="Login"
                />
              </div>
            </Form>
          </Formik>
        </div>
        <div className="mt-4 text-center dark:text-white">
          Not yet on 13RMS?
          <a href="/signup" className="link-hover">
            {' '}
            Join now
          </a>
        </div>
      </div>
    </Layout>
  )
}
export default Login
