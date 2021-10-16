import { useEffect, useState } from 'react'
import Loading from 'components/Loading'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import FormInput from 'components/atoms/FormInput'
import Info from 'components/alerts/Info'
import Divider from 'components/atoms/Divider'
import TextButton from 'components/atoms/TextButton'
import { links } from 'constants/Links'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { BusinessStepTwoFields } from 'initials'
import Layout from 'containers/Layout'
import FormSelector from 'components/atoms/FormSelector'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import { getAccessToken, network, renderPathByType } from 'helpers'
import Error from 'components/alerts/Error'
import { IParent } from 'interfaces/UniversalInterface'
import { useUserContext } from 'context/UserContext'
import { orderBy } from 'lodash'
const yourhandle = require('countrycitystatejson')

const BusinessStepTwo = ({ userData }: { userData: IParent }) => {
  const history = useHistory()
  const [isLoaded] = useState(true)

  const [saving, setSaving] = useState(false)
  const countries = yourhandle.getCountries()

  /**
   * Check if account is already selected
   */
  const checkAccount = () => {
    if (
      userData &&
      userData?.other?.hasOwnProperty('accountFilled') &&
      userData?.other?.accountFilled
    ) {
      return history.push(links.DASHBAORD)
    }
  }

  useEffect(() => {
    checkAccount()
  }, [])

  const validationSchema = Yup.object({
    businessCountry: Yup.string().required('Please select business country'),
    businessAddress: Yup.string().required('Please enter business address'),
    postalCode: Yup.string()
      .required('Postal code is a required field')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(6, 'Must be exactly 6 digits')
      .max(6, 'Must be exactly 6 digits'),
    city: Yup.string().required(),
    businessEntityType: Yup.string().required(
      'Please enter business entity type'
    ),
    typeOfBusiness: Yup.string().required('Please enter type of business'),
    relationshipToBusiness: Yup.string().required(
      'Please enter your relationship with business'
    ),
    legalNumber: Yup.string()
      .matches(/^[0-9+()-]+$/, 'Must be only digits')
      .required('Please enter business legal number'),
    mobileNumber: Yup.string()
      .matches(/^[0-9+()-]+$/, 'Must be only digits')
      .required('Please enter business legal number'),
  })

  const [errors, setErrors] = useState<string[]>([])
  const { setValues } = useUserContext()

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
        return history.push(links.DASHBAORD)
      }
    }
  }

  useEffect(() => {
    redirection()
  }, [userData?.other?.accountFilled, userData?.other?.accountFinishedStep])

  const onSubmit = async (values: typeof BusinessStepTwoFields) => {
    try {
      const token = getAccessToken()

      setSaving(true)

      const updatedData = {
        ...userData,
        other: {
          ...userData.other,
          accountFinishedStep: 'business-step-2',
          accountFilled: false,
        },
        location: {
          ...userData.location,
          country: values.businessCountry,
          address: values.businessAddress,
          postalCode: values.postalCode,
          city: values.city,
        },
        business: {
          ...userData.business,
          additionalInfo: values.additionalInfo,
          legalNumber: values.legalNumber,
          businessRegNumber: values.businessRegNumber,
          typeOfBusiness: values.typeOfBusiness,
          bussinessEntityType: values.businessEntityType,
          relationshipToBusiness: values.relationshipToBusiness,
        },
        mobileNumber: values.mobileNumber,
      }
      //@ts-ignore
      delete updatedData.password
      setValues({ ...updatedData })
      await network.post(
        '/user/update',
        { ...updatedData },
        {
          headers: { Authorization: token },
        }
      )
      history.push(links.CHOOSE_TEMPLATE)
    } catch (error) {
      // @ts-ignore
      setErrors([error.message])
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  return !isLoaded ? (
    <Loading />
  ) : (
    <Layout title="Contact information for your company">
      <AnimatedDiv
        // @ts-ignore
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="mb-4">
          <Info text="Please provide your legally registered business address and telephone number" />
        </div>
        <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={BusinessStepTwoFields}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <FormSelector
                label="Legal business country"
                list={orderBy(countries, ['name', 'asc'])}
                name="businessCountry"
                required
                placeholder="Select country"
              />
              <FormInput
                label="Legal business address"
                id="businessAddress"
                name="businessAddress"
                placeholder="eg. 185 Race Ave. Cape Coral, FL"
                required
              />
              <FormInput
                label="Additional information"
                id="additionalInfo"
                optional
                placeholder="eg. We are specialist in computer hardwares"
                name="additionalInfo"
              />
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <FormInput
                  gridClass="sm:col-span-3"
                  label="Postal Code"
                  id="postalCode"
                  name="postalCode"
                  placeholder="78418"
                  required
                />

                <FormInput
                  gridClass="sm:col-span-3"
                  label="City"
                  id="city"
                  placeholder="Bridgewater"
                  required
                  name="city"
                />
              </div>

              <div>
                <FormInput
                  label="Legal phone number"
                  id="legalNumber"
                  placeholder="+91 (123) 456-7890"
                  required
                  name="legalNumber"
                />
              </div>

              <Divider />

              <div>
                <FormSelector
                  name="typeOfBusiness"
                  list={[
                    { name: 'Test business 1' },
                    { name: 'Test business 2' },
                  ]}
                  placeholder="Select type of business"
                  label="Type of business"
                  required
                />
              </div>
              <div>
                <FormSelector
                  name="businessEntityType"
                  list={[
                    { name: 'Test business entity 1' },
                    { name: 'Test business entity 2' },
                  ]}
                  placeholder="Select business entity"
                  required
                  label="Business entity type"
                />
              </div>

              <div>
                <FormInput
                  label="Company registration number"
                  optional
                  id="businessRegNumber"
                  name="businessRegNumber"
                />
              </div>
              <Divider />
              <h5 className="font-semibold dark:text-white text-lg">
                Your contact details
              </h5>
              <p className="text-base dark:text-gray-400 text-gray-500">
                We use this information to message you about account activity or
                other matters that require your attention.
              </p>

              <div>
                <FormSelector
                  name="relationshipToBusiness"
                  list={[
                    { name: 'Owner' },
                    { name: 'CEO' },
                    { name: 'Human Resources Manager' },
                    { name: 'Business Administrator' },
                  ]}
                  required
                  label="Relationship to business"
                  placeholder="Select relationship"
                />
              </div>
              <div>
                <FormInput
                  label="Mobile phone"
                  id="mobileNumber"
                  placeholder="+91 (123) 456-7890"
                  required
                  name="mobileNumber"
                />
              </div>

              <div hidden={errors.length === 0}>
                <Error errors={errors} />
              </div>

              <div>
                <Button
                  fullWidth
                  type="submit"
                  loading={saving}
                  rounded="rounded-lg"
                  gradient
                  label="Get on"
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
        {/* </div> */}
        {/* <Copyright /> */}
      </AnimatedDiv>
    </Layout>
  )
}
export default BusinessStepTwo
