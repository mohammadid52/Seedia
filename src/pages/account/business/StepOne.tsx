import React, { useEffect, useState } from 'react'
import Loading from 'components/Loading'

import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'

import FormInput from 'components/atoms/FormInput'
import Info from 'components/alerts/Info'
import TextButton from 'components/atoms/TextButton'
import { links } from 'constants/Links'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { BusinessStepOneFields } from '../../../initials'

import Layout from 'containers/Layout'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import { getAccessToken, network, renderPathByType } from 'helpers'
import Error from 'components/alerts/Error'

import { IParent } from 'interfaces/UniversalInterface'
import { useUserContext } from 'context/UserContext'

const BusinessStepOne = ({ userData }: { userData: IParent }) => {
  const history = useHistory()
  const [isLoaded] = useState(true)

  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter legal business name'),
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Please enter legal business email address'),

    number: Yup.string()
      .matches(/^[0-9+()-]+$/, 'Must be only digits')
      .required('Please enter business number'),
  })

  const redirection = () => {
    const user = userData
    if (user) {
      if (!user?.other?.accountFilled) {
        if (user.other?.accountType === 'business') {
          if (user.other?.accountFinishedStep === 'business-step-2') {
            // redirect to choose template page
            console.log('redirect to choose template page')
            return history.push(links.CHOOSE_TEMPLATE)
          } else if (user.other?.accountFinishedStep === 'business-step-1') {
            // redirect to location page
            console.log('redirect to location page')
            return history.push(links.BUSINESS_STEP_2)
          } else if (user.other?.accountFinishedStep === 'chooseAccount') {
            console.log('get the accountType and redirect as per account type')
            // get the accountType and redirect as per account type
            return history.push(renderPathByType(user.other?.accountType))
          } else if (user.other?.accountFinishedStep === 'signup') {
            // redirect to choose Account page
            console.log('redirect to choose Account page')
            return history.push(links.CHOOSE_ACCOUNT)
          }
        } else {
          if (user && user.other) {
            console.log('get the accountType and redirect as per account type')
            // get the accountType and redirect as per account type
            return history.push(renderPathByType(user.other.accountType))
          }
        }
      } else {
        //  redirect to dashboard
        console.log('redirect to dashboard')
        return history.push(links.FEED)
      }
    }
  }

  useEffect(() => {
    redirection()
  }, [userData?.other?.accountFilled, userData?.other?.accountFinishedStep])

  const { setValues } = useUserContext()

  const onSubmit = async (values: typeof BusinessStepOneFields) => {
    try {
      setSaving(true)
      const token = getAccessToken()

      const updatedData = {
        ...userData,
        business: {
          ...userData.business,
          name: values.name,
          email: values.email,
          number: values.number,
        },
        other: {
          ...userData.other,
          accountFinishedStep: 'business-step-1',
        },
      }

      await network.post(
        '/user/update',
        { ...updatedData },
        {
          headers: { Authorization: token },
        }
      )

      //@ts-ignore
      delete updatedData.password
      setValues({ ...updatedData })

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
          onClick={() => history.push(links.COMPANY)}
        />
      }
      title="Create business account"
    >
      <AnimatedDiv className="mt-0 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mb-4">
          <Info text="Qualify for business seller limits, promotions and professional tools to expand your business" />
        </div>
        <div className="bg-white dark:bg-gray-900 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={BusinessStepOneFields}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <FormInput
                label="Legal business name"
                id="name"
                name="name"
                required
              />
              <FormInput
                label="Legal business email address"
                id="email"
                name="email"
                type="email"
                required
              />

              <FormInput
                label="Legal phone number of business"
                id="number"
                name="number"
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
                  label="Next"
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
