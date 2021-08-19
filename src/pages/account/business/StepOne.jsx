import React, { useEffect, useState } from 'react'
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

import Layout from 'containers/Layout'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import { network } from 'helpers'
import Error from 'components/alerts/Error'

const BusinessStepOne = ({ user }) => {
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(true)

  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState([])

  const validationSchema = Yup.object({
    companyName: Yup.string().required('Please enter legal company name'),
    companyEmail: Yup.string()
      .email('Please enter valid email address')
      .required('Please enter legal company email address'),

    companyNumber: Yup.string()
      .matches(/^[0-9+()-]+$/, 'Must be only digits')
      .required('Please enter company number'),
  })

  /**
   * Check if account is already selected
   */
  const checkAccount = () => {
    if (user && user.hasOwnProperty('accountFilled') && user?.accountFilled) {
      return history.push(links.DASHBAORD)
    }
  }

  useEffect(() => {
    checkAccount()
  }, [])

  const onSubmit = async (values) => {
    try {
      setSaving(true)
      await network.post('/user/update', {
        companyName: values.companyName,
        companyEmail: values.companyEmail,
        companyNumber: values.companyNumber,
      })
      history.push(links.BUSINESS_STEP_2)
    } catch (error) {
      setErrors([error.message])
      console.error(error)
    } finally {
      setSaving(false)
    }
  }
  return !isLoaded ? (
    <Loading />
  ) : (
    <Layout
      withButton={
        <TextButton
          text="or create a personal account"
          onClick={() => history.push(links.PERSONAL_STEP_1)}
        />
      }
      title="Create business account"
    >
      <AnimatedDiv className="mt-0 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mb-4">
          <Info text="Qualify for business seller limits, promotions and professional tools to expand your business" />
        </div>
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={BusinessStepOneFields}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <FormInput
                label="Legal company name"
                id="companyName"
                name="companyName"
                required
              />
              <FormInput
                label="Legal company email address"
                id="companyEmail"
                name="companyEmail"
                type="email"
                required
              />

              <FormInput
                label="Legal phone number of company"
                id="companyNumber"
                name="companyNumber"
                required
              />

              <div className="space-y-2 my-4 ">
                <p className="text-left text-xs dark:text-gray-400 tracking-wide leading-5 text-gray-600">
                  We regularly send you e-mails with special offers on 13RMS.
                  You can unsubsribe from these marketing messages at any time
                  free of charge through 13RMS or the links in the email.
                </p>
                <p className="text-left text-xs dark:text-gray-400 tracking-wide leading-5 text-gray-600">
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

              <div hidden={errors.length === 0}>
                <Error errors={errors} />
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
      </AnimatedDiv>
    </Layout>
  )
}
export default BusinessStepOne
