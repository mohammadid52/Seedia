import { useEffect, useState } from 'react'
import Loading from 'components/Loading'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import FormInput from 'components/atoms/FormInput'
import Info from 'components/alerts/Info'
import Divider from 'components/atoms/Divider'
import TextButton from 'components/atoms/TextButton'
import { links } from 'constants/Links'
import { wait } from 'utils/wait'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { BusinessStepTwoFields } from 'initials'
import Layout from 'containers/Layout'
import FormSelector from 'components/atoms/FormSelector'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import { network } from 'helpers'
import Error from 'components/alerts/Error'
const yourhandle = require('countrycitystatejson')

const BusinessStepTwo = ({ user }: { user: any }) => {
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(true)

  const [saving, setSaving] = useState(false)
  const countries = yourhandle.getCountries()

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

  const validationSchema = Yup.object({
    companyCountry: Yup.string().required('Please select company country'),
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
    typeOfCompany: Yup.string().required('Please enter type of company'),
    relationshipToCompany: Yup.string().required(
      'Please enter your relationship with company'
    ),
    legalNumber: Yup.string()
      .matches(/^[0-9+()-]+$/, 'Must be only digits')
      .required('Please enter company legal number'),
    mobileNumber: Yup.string()
      .matches(/^[0-9+()-]+$/, 'Must be only digits')
      .required('Please enter company legal number'),
  })

  const [errors, setErrors] = useState<string[]>([])

  const onSubmit = async (values: typeof BusinessStepTwoFields) => {
    try {
      setSaving(true)
      await network.post('/user/update', {
        accountFilled: true,
        location: {
          country: values.companyCountry,
          address: values.businessAddress,
          postalCode: values.postalCode,
          city: values.city,
        },
        company: {
          additionalInfo: values.additionalInfo,
          legalNumber: values.legalNumber,
          companyRegNumber: values.companyRegNumber,
          typeOfCompany: values.typeOfCompany,
          bussinessEntityType: values.businessEntityType,
        },
        mobileNumber: values.mobileNumber,
        relationshipToCompany: values.relationshipToCompany,
      })
      history.push(links.DASHBAORD)
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
    <Layout title="Contact information for your company">
      <AnimatedDiv
        // @ts-ignore
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="mb-4">
          <Info text="Please provide your legally registered business address and telephone number" />
        </div>
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={BusinessStepTwoFields}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <FormSelector
                label="Legal company country"
                list={countries}
                name="companyCountry"
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
                  name="typeOfCompany"
                  list={[
                    { name: 'Test business 1' },
                    { name: 'Test business 2' },
                  ]}
                  placeholder="Select type of company"
                  label="Type of company"
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
                  id="companyRegNumber"
                  name="companyRegNumber"
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
                  name="relationshipToCompany"
                  list={[
                    { name: 'CEO' },
                    { name: 'Human Resources Manager' },
                    { name: 'Business Administrator' },
                  ]}
                  required
                  label="Relationship to company"
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
