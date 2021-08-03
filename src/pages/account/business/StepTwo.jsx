import React, { useState } from 'react'
import Loading from 'components/Loading'
import Copyright from 'components/Copyright'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import FormInput from 'components/atoms/FormInput'
import Info from 'components/alerts/Info'
import InputWithDropdown from 'components/atoms/InputWithDropdown'
import { countryCodeList } from 'values/values'
import Selector from 'components/atoms/Selector'
import Divider from 'components/atoms/Divider'
import TextButton from 'components/atoms/TextButton'
import { links } from 'constants/Links'
import { wait } from 'utils/wait'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { BusinessStepTwoFields } from 'initials'
import { useUserContext } from 'context/UserContext'

const BusinessStepTwo = () => {
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(true)
  const { values, setValues } = useUserContext()

  const [saving, setSaving] = useState(false)

  const validationSchema = Yup.object({
    company_country: Yup.string().required('Please enter company country'),
    business_address: Yup.string().required('Please entry business address'),
    postal_code: Yup.string().required('Please entry postal code'),
    place: Yup.string().required('Please entry place'),
  })

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  // for test purpose

  const addDataToLS = () => {
    window.localStorage.setItem('business', JSON.stringify(values.business))
    window.localStorage.setItem('accountType', values.accountType)
    console.log('Successfully added business account to local storage')
  }

  const onSubmit = (_values) => {
    setSaving(true)
    wait(3000).then(() => {
      setSaving(false)
      setValues({
        ...values,
        business: {
          ...values.business,
          country: _values.company_country,
          address: _values.business_address,
          additionalInfo: _values.additional_info,
          postalCode: _values.postal_code,
          place: _values.place,
          legalNumber: _values.legal_number,
          companyRegNumber: _values.company_reg_number,
          firstName: _values.firstName,
          lastName: _values.lastName,
          mobileNumber: _values.mobile_number,
          typeOfCompany: _values.type_of_company,
          bussinessEntityType: _values.business_entity_type,
          relationshipToCompany: _values.relationship_to_company,
        },
      })
      addDataToLS()
      history.push(links.DASHBAORD)
    })
  }
  const [fields, setFields] = useState({
    type_of_company: '',
    business_entity_type: '',
    relationship_to_company: '',
  })

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
        <h2 className="mt-6 dark:text-white my-4 text-center text-3xl font-extrabold text-gray-900">
          Contact information for your company
        </h2>
      </div>

      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-md">
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
              <FormInput
                label="Legal company country"
                id="company_country"
                name="company_country"
                required
              />
              <FormInput
                label="Legal business address"
                id="business_address"
                name="business_address"
                required
              />
              <FormInput
                label="Additional information"
                id="additional_info"
                optional
                name="additional_info"
              />
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <FormInput
                  gridClass="sm:col-span-3"
                  label="Postal Code"
                  id="postal_code"
                  name="postal_code"
                  required
                />

                <FormInput
                  gridClass="sm:col-span-3"
                  label="Place"
                  id="place"
                  required
                  name="place"
                />
              </div>

              <div>
                <InputWithDropdown
                  label="Legal phone number"
                  list={countryCodeList}
                  placeholder="+91 (123) 456-7890"
                  required
                  id="legal_number"
                  name="legal_number"
                />
              </div>

              <Divider />

              <div>
                <Selector
                  selectedItem={fields.type_of_company}
                  list={[
                    { id: '0', name: 'Test business 1' },
                    { id: '1', name: 'Test business 2' },
                  ]}
                  placeholder="Select type of company"
                  label="Type of company"
                  required
                  onSelect={(item) =>
                    setFields({ ...fields, type_of_company: item.name })
                  }
                />
              </div>
              <div>
                <Selector
                  selectedItem={fields.business_entity_type}
                  list={[
                    { id: '0', name: 'Test business entity 1' },
                    { id: '1', name: 'Test business entity 2' },
                  ]}
                  placeholder="Select business entity"
                  required
                  label="Business entity type"
                  onSelect={(item) =>
                    setFields({ ...fields, business_entity_type: item.name })
                  }
                />
              </div>

              <div>
                <FormInput
                  label="Company registration number"
                  optional
                  id="company_reg_number"
                  name="company_reg_number"
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
                <Selector
                  selectedItem={fields.relationship_to_company}
                  list={[
                    { id: '0', name: 'Test relationship 1' },
                    { id: '1', name: 'Test relationship 2' },
                  ]}
                  required
                  label="Relationship to company"
                  placeholder="Select relationship"
                  onSelect={(item) =>
                    setFields({ ...fields, relationship_to_company: item.name })
                  }
                />
              </div>
              <div>
                <InputWithDropdown
                  required
                  name="mobile_number"
                  label="Mobile phone"
                  list={countryCodeList}
                  placeholder="+91 (123) 456-7890"
                />
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
      </div>
      <Copyright />
    </div>
  )
}
export default BusinessStepTwo
