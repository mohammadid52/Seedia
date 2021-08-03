import React, { useState } from 'react'
import Loading from 'components/Loading'
import Copyright from 'components/Copyright'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'

import FormInput from 'components/atoms/FormInput'
import Info from 'components/alerts/Info'
import TextButton from 'components/atoms/TextButton'
import { links } from 'constants/Links'
import { wait } from 'utils/wait'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { BusinessStepOneFields } from '../../../initials'
import { useUserContext } from 'context/UserContext'

const BusinessStepOne = () => {
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(true)
  const { values, setValues } = useUserContext()

  const [saving, setSaving] = useState(false)

  const validationSchema = Yup.object({
    company_name: Yup.string().required('Please enter legal company name'),
    company_email: Yup.string()
      .email('Please enter valid email address')
      .required('Please add legal company email address'),

    company_number: Yup.string().required('Please enter company number'),
  })

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const onSubmit = (_values) => {
    setSaving(true)
    wait(3000).then(() => {
      setSaving(false)
      setValues({
        ...values,
        business: {
          ...values.business,
          name: _values.company_name,
          email: _values.company_email,
          number: _values.company_number,
        },
      })
      history.push(links.BUSINESS_STEP_2)
    })
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
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={BusinessStepOneFields}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <FormInput
                label="Legal company name"
                id="company_name"
                name="company_name"
                required
              />
              <FormInput
                label="Legal company email address"
                id="company_email"
                name="company_email"
                type="email"
                required
              />

              <FormInput
                label="Legal phone number of company"
                id="company_number"
                name="company_number"
                required
              />

              <div className="space-y-2 my-4">
                <p className="text-left text-xs text-gray-600">
                  We regularly send you e-mails with special offers on 13RMS.
                  You can unsubsribe from these marketing messages at any time
                  free of charge throw 13RMS or the links in the email.
                </p>
                <p className="text-left text-xs text-gray-600">
                  By selecting <strong>Register</strong>, you confirm that you
                  have read and agreed to our{' '}
                  <a className="text-xs" href="#/">
                    User Agreement.
                  </a>
                  . For more information about the processing of your data,
                  please see out{' '}
                  <a className="text-xs" href="#/">
                    Privacy Statement.
                  </a>
                </p>
              </div>

              <div>
                <Button
                  fullWidth
                  rounded="rounded-lg"
                  type="submit"
                  gradient
                  loading={saving}
                  label="Finish Submit"
                />
              </div>
            </Form>
          </Formik>
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
