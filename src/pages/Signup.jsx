import React, { useState } from 'react'
import Loading from 'components/Loading'
import Copyright from 'components/Copyright'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import FormInput from 'components/atoms/FormInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { links } from 'constants/Links'

import { useUserContext } from 'context/UserContext'
import Error from 'components/alerts/Error'

const Signup = () => {
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(true)
  const { setValues, values } = useUserContext()

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please add email address'),
    password: Yup.string()
      .min(6, 'Password must be atleast 6 characters long')
      .required('Please add password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Please add confirm password'),
  })

  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState([])

  const apiCall = async (values) => {
    const res = await axios.post(links.BASE_API_URL + '/auth/register', {
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    })
    if (res.status === 409) {
      setErrors([...errors, 'User already exists'])
    }
  }

  const onSubmit = (_values) => {
    try {
      setSaving(true)
      setValues({
        ...values,
        user: {
          ...values.user,
          firstName: _values.firstName,
          lastName: _values.lastName,
          email: _values.email,
        },
      })

      apiCall(_values)
      // history.push(links.CHOOSE_ACCOUNT)
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
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
                  required
                />

                <FormInput
                  gridClass="sm:col-span-3"
                  label="Last name"
                  id="lastName"
                  name="lastName"
                  required
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
              <div hidden={errors.length === 0}>
                <Error errors={errors} />
              </div>

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
