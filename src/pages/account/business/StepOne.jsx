import React, { useState } from 'react'
import Loading from 'components/Loading'
import Copyright from 'components/Copyright'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import useForm from 'hooks/useForm'
import FormInput from 'components/atoms/FormInput'
import Info from 'components/alerts/Info'
import TextButton from 'components/atoms/TextButton'
import { links } from 'constants/Links'
import { wait } from 'utils/wait'

const BusinessStepOne = () => {
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(true)

  const [saving, setSaving] = useState(false)

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

  const { fields, onChange, errors } = useForm(
    INITIAL_FIELDS,
    ERROR_INITIAL_FIELDS
  )

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const handleSubmit = () => {
    const isValid = true

    if (isValid) {
      setSaving(true)
      wait(3000).then(() => {
        setSaving(false)
        return history.push(links.BUSINESS_STEP_2)
      })
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
          Create business account
        </h2>

        <TextButton text="or create a personal account" onClick={() => {}} />
      </div>

      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mb-4">
          <Info text="Qualify for business seller limits, promotions and professional tools to expand your business" />
        </div>
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Legal company name"
              id="email"
              name="email"
              onChange={onChange}
              required
              type="email"
              error={errors.email}
              value={fields.email}
            />
            <FormInput
              label="Legal company email address"
              id="password"
              name="password"
              onChange={onChange}
              type="password"
              error={errors.password}
              required
              value={fields.password}
            />
            <FormInput
              label="Re-enter email address"
              id="email"
              name="email"
              onChange={onChange}
              required
              type="email"
              error={errors.email}
              value={fields.email}
            />
            <FormInput
              label="password"
              id="password"
              name="password"
              onChange={onChange}
              type="password"
              error={errors.password}
              required
              value={fields.password}
            />
            <FormInput
              label="Legal phone number of company"
              id="password"
              name="password"
              onChange={onChange}
              type="password"
              error={errors.password}
              required
              value={fields.password}
            />

            <div className="space-y-2 my-4">
              <p className="text-left text-xs text-gray-600">
                We regularly send you e-mails with special offers on 13RMS. You
                can unsubsribe from these marketing messages at any time free of
                charge throw 13RMS or the links in the email.
              </p>
              <p className="text-left text-xs text-gray-600">
                By selecting <strong>Register</strong>, you confirm that you
                have read and agreed to our{' '}
                <a className="text-xs" href="#/">
                  User Agreement.
                </a>
                . For more information about the processing of your data, please
                see out{' '}
                <a className="text-xs" href="#/">
                  Privacy Statement.
                </a>
              </p>
            </div>

            <div>
              <Button
                onClick={handleSubmit}
                fullWidth
                rounded="rounded-lg"
                loading={saving}
                gradient
                label="Register"
              />
            </div>
          </form>
        </div>
        <TextButton
          onClick={history.goBack}
          text="Go back"
          className="inline-block mt-4"
        />
      </div>
      <Copyright />
    </div>
  )
}
export default BusinessStepOne
