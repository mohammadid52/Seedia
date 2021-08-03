import React, { useState } from 'react'
import Loading from 'components/Loading'
import Copyright from 'components/Copyright'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'

import FormInput from 'components/atoms/FormInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { wait } from 'utils/wait'
import { links } from 'constants/Links'

import { useUserContext } from 'context/UserContext'

const Signup = () => {
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(true)
  const { setValues, values } = useUserContext()

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Please add email address'),
    password: Yup.string().required('Please add password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Please add confirm password'),
  })

  const [saving, setSaving] = useState(false)

  const addUserToLS = () => {
    window.localStorage.setItem('user', JSON.stringify(values.user))
    console.log('Successfully added user to local storage')
  }

  const onSubmit = (_values) => {
    setSaving(true)
    wait(3000).then(() => {
      setValues({
        ...values,
        user: {
          ...values.user,
          firstName: _values.firstName,
          lastName: _values.lastName,
          email: _values.email,
        },
      })
      addUserToLS()
      setSaving(false)
      history.push(links.CHOOSE_ACCOUNT)
    })
  }

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  return !isLoaded ? (
    <Loading />
  ) : (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex flex-col justify-start py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col ">
        <img
          className="mx-auto h-32 w-auto"
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="Workflow"
        />
        <h2 className="mt-6 dark:text-white text-center text-3xl font-extrabold text-gray-900">
          Create new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Discover the benefits of selling and <br />
          networking with your profile
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={values.user}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <FormInput
                  gridClass="sm:col-span-3"
                  label="First name"
                  id="firstName"
                  name="firstName"
                />

                <FormInput
                  gridClass="sm:col-span-3"
                  label="Last name"
                  id="lastName"
                  name="lastName"
                />
              </div>

              <FormInput
                label="Email"
                id="email"
                name="email"
                required
                type="email"
              />
              <FormInput
                label="Password"
                id="password"
                name="password"
                showPasswordButton
                type="password"
                required
              />
              <FormInput
                label="Confirm password"
                name="confirmPassword"
                id="confirmPassword"
                showPasswordButton
                type="password"
                required
              />

              <p className="my-4 text-left text-xs dark:text-gray-400 text-gray-600">
                By clicking Agree and Join, you agree to 13RMS{' '}
                <a
                  href="#/"
                  className="font-medium text-xs text-blue-600 hover:text-blue-500"
                >
                  User Agreement, Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="#/"
                  className="font-medium text-xs text-blue-600 hover:text-blue-500"
                >
                  Cookie Policy
                </a>
              </p>

              <div>
                <Button
                  type="submit"
                  fullWidth
                  rounded="rounded-lg"
                  loading={saving}
                  gradient
                  label="Agree and become a member"
                />
              </div>
            </Form>
          </Formik>
        </div>
        <div className="mt-4 text-center dark:text-white">
          Already on 13RMS?
          <a href="/login" className="link-hover">
            {' '}
            Login now
          </a>
        </div>
      </div>
      <Copyright />
    </div>
  )
}
export default Signup
