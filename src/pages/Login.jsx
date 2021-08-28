import React, { useState } from 'react'

import Loading from 'components/Loading'
import Button from 'components/atoms/Button'
import Layout from 'containers/Layout'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { LOGIN } from 'initials'
import FormInput from 'components/atoms/FormInput'
import { links } from 'constants/Links'
import { useHistory } from 'react-router-dom'
import { network } from 'helpers'
import { useUserContext } from 'context/UserContext'

const Login = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const history = useHistory()
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Please add email address'),
    password: Yup.string().required('Please add password').min(6).max(20),
  })

  const { setValues } = useUserContext()

  const [loading, setLoading] = useState(false)

  const apiCall = async (values) => {
    const { data } = await network.post('/auth/login', {
      email: values.email,
      password: values.password,
    })

    //@ts-ignore
    delete data._id
    setValues({ ...data.data, ...data })

    // if (res.status === 409) {
    //   setErrors([...errors, 'User already exists'])
    // }

    // set token in localStorage
    history.push(links.DASHBAORD)
    localStorage.setItem('access_token', data.data.access_token)
  }

  const onSubmit = async (_values) => {
    setLoading(true)

    apiCall(_values)
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
