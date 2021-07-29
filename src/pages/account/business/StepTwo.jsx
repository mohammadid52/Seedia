import React, { useState } from 'react'
import Loading from 'components/Loading'
import Copyright from 'components/Copyright'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import useForm from 'hooks/useForm'
import FormInput from 'components/atoms/FormInput'
import Info from 'components/alerts/Info'
import InputWithDropdown from 'components/atoms/InputWithDropdown'
import { countryCodeList } from 'values/values'
import Selector from 'components/atoms/Selector'
import Divider from 'components/atoms/Divider'

const BusinessStepTwo = () => {
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(true)

  //capture inputs
  const INITIAL_FIELDS = {
    company_country: '',
    business_address: '',
    additional_info: '',
    postal_code: '',
    place: '',
    legal_number: '',
    type_of_company: { id: '', name: '' },
    business_entity_type: { id: '', name: '' },
    company_reg_number: '',
    firstName: '',
    lastName: '',
    relationship_to_company: { id: '', name: '' },
    personal_mobile: '',
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
      history.push('/account/business/edit-profile/stepTwo')
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
          Contact information for your company
        </h2>
      </div>

      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mb-4">
          <Info text="Please provide your legally registered business address and telephone number" />
        </div>
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Legal company country"
              id="company_country"
              name="company_country"
              onChange={onChange}
              required
              error={errors.company_country}
              value={fields.company_country}
            />
            <FormInput
              label="Legal business address"
              id="business_address"
              name="business_address"
              onChange={onChange}
              error={errors.business_address}
              required
              value={fields.business_address}
            />
            <FormInput
              label="Additional information (optional)"
              id="additional_info"
              name="additional_info"
              onChange={onChange}
              value={fields.additional_info}
            />
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <FormInput
                gridClass="sm:col-span-3"
                label="Postal Code"
                id="postal_code"
                name="postal_code"
                required
                onChange={onChange}
                value={fields.postal_code}
                error={errors.postal_code}
              />

              <FormInput
                gridClass="sm:col-span-3"
                label="Place"
                id="place"
                required
                name="place"
                onChange={onChange}
                value={fields.place}
                error={errors.place}
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
                onSelect={(item) => {}}
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
                onSelect={(item) => {}}
              />
            </div>

            <div>
              <FormInput
                label="Company registration number (optional)"
                id="company_reg_number"
                name="company_reg_number"
                onChange={onChange}
                value={fields.company_reg_number}
              />
            </div>
            <Divider />
            <h5>Your contact details</h5>
            <p>
              We use this information to message you about account activity or
              other matters that require your attention.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <FormInput
                gridClass="sm:col-span-3"
                label="First Name"
                id="firstName"
                name="firstName"
                onChange={onChange}
                required
                value={fields.firstName}
                error={errors.firstName}
              />

              <FormInput
                gridClass="sm:col-span-3"
                required
                label="Last Name"
                id="lastName"
                name="lastName"
                onChange={onChange}
                value={fields.lastName}
                error={errors.lastName}
              />
            </div>
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
                onSelect={(item) => {}}
              />
            </div>
            <div>
              <InputWithDropdown
                required
                label="Mobile phone"
                list={countryCodeList}
                placeholder="+91 (123) 456-7890"
              />
            </div>

            <div>
              <Button
                onClick={handleSubmit}
                fullWidth
                rounded="rounded-lg"
                gradient
                label="Get on"
              />
            </div>
          </form>
        </div>
      </div>
      <Copyright />
    </div>
  )
}
export default BusinessStepTwo
