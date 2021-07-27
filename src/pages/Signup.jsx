import React, { useState } from 'react'
import Loading from 'components/Loading'
import Copyright from 'components/Copyright'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import useForm from 'hooks/useForm'
import FormInput from 'components/atoms/FormInput'

const Signup = () => {
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(true)

  //capture inputs
  const INITIAL_FIELDS = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  const ERROR_INITIAL_FIELDS = {
    email: '',
    password: '',
  }

  const { fields, onChange, errors, setErrors } = useForm(
    INITIAL_FIELDS,
    ERROR_INITIAL_FIELDS
  )

  const validateForm = () => {
    let isValid = true

    const trimmedLen = (field) => fields[field].trim().length

    if (trimmedLen('email') <= 0) {
      isValid = false
      errors.email = 'Please add email field'
    } else {
      isValid = true
      errors.email = ''
    }

    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        fields.email
      )
    ) {
      isValid = true
      errors.email = ''
    } else {
      isValid = false
      errors.email = 'Please enter a valid email address'
    }

    if (trimmedLen('password') < 6) {
      isValid = false
      errors.password = 'Password must be atleast six characters long'
    } else {
      isValid = true
      errors.password = ''
    }

    setErrors({ ...errors })

    return isValid
  }

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const handleSubmit = () => {
    const isValid = true
    if (isValid) {
      history.push('/account/personal/edit-profile/company')
    } else {
    }
  }
  return !isLoaded ? (
    <Loading />
  ) : (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-start py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col ">
        <img
          className="mx-auto h-32 w-auto"
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Discover the benefits of selling and <br />
          networking with your profile
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <FormInput
                gridClass="sm:col-span-3"
                label="First name"
                id="firstName"
                name="firstName"
                onChange={onChange}
                value={fields.firstName}
              />

              <FormInput
                gridClass="sm:col-span-3"
                label="Last name"
                id="lastName"
                name="lastName"
                onChange={onChange}
                value={fields.lastName}
              />
            </div>

            <FormInput
              label="Email"
              id="email"
              name="email"
              onChange={onChange}
              required
              type="email"
              error={errors.email}
              value={fields.email}
            />
            <FormInput
              label="Password"
              id="password"
              name="password"
              onChange={onChange}
              type="password"
              error={errors.password}
              required
              value={fields.password}
            />

            <p className="my-4 text-left text-xs text-gray-600">
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
                onClick={handleSubmit}
                fullWidth
                rounded="rounded-lg"
                gradient
                label="Agree and become a member"
              />
            </div>
          </form>
        </div>
        <div className="mt-4 text-center">
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
