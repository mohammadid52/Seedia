import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import Copyright from 'components/Copyright'
import Loading from 'components/Loading'
import useForm from 'hooks/useForm'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { wait } from 'utils/wait'

const LastStep = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()

  //capture inputs

  const locationList = [{ id: 1, name: 'India' }]

  const INITIAL_FIELDS = {
    country: '',
    pincode: '',
    location_within_area: { id: '', name: '' },
  }

  const ERROR_INITIAL_FIELDS = {
    country: '',
    pincode: '',
    location_within_area: '',
  }

  const { fields, onChange, errors, setFields, setErrors } = useForm(
    INITIAL_FIELDS,
    ERROR_INITIAL_FIELDS
  )
  const [saving, setSaving] = useState(false)

  const nextStep = () => {
    const isValid = validateForm()
    if (isValid) {
      setSaving(true)
      wait(3000).then(() => {
        setSaving(false)
        return history.push('/dashboard')
      })
    } else {
    }
  }

  const validateForm = () => {
    let isValid = true

    const trimmedLen = (field) => fields[field].trim().length

    if (trimmedLen('country') <= 0) {
      isValid = false
      errors.country = 'Please add country.'
    } else {
      isValid = true
      errors.country = ''
    }

    if (trimmedLen('pincode') < 6) {
      isValid = false
      errors.pincode = 'Invalid pincode.'
    } else {
      isValid = true
      errors.pincode = ''
    }
    // if (trimmedLen('location_within_area') <= 0) {
    //   isValid = false
    //   errors.location_within_area = ''
    // } else {
    //   isValid = true
    //   errors.location_within_area = 'This field is important.'
    // }

    setErrors({ ...errors })

    return isValid
  }

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const goBack = () => {
    history.push('/account/personal/edit-profile/company')
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
          Welcome, Mohammad!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Create a profile, connect with acquaintances and discuss topics that
          interest you.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <FormInput
              label="Country / region"
              id="country"
              name="country"
              onChange={onChange}
              required
              type="text"
              error={errors.country}
              value={fields.country}
            />

            <FormInput
              label="Postal Code"
              id="pincode"
              name="pincode"
              onChange={onChange}
              error={errors.pincode}
              required
              value={fields.pincode}
            />
            <div className="mt-6">
              <Selector
                label={'Location within this area'}
                list={locationList}
                selectedItem={
                  fields.location_within_area.id
                    ? fields.location_within_area
                    : { id: 0, name: 'Select area' }
                }
                onSelect={(item) =>
                  setFields({
                    ...fields,
                    location_within_area: { id: item.id, name: item.name },
                  })
                }
              />
            </div>

            <div>
              <Button
                onClick={nextStep}
                fullWidth
                rounded="rounded-lg"
                gradient
                loading={saving}
                label="Finish Submit"
              />
            </div>
          </div>
        </div>
        <div className="my-4">
          <Button
            onClick={goBack}
            rounded="rounded-lg"
            gradient
            size="sm"
            label="Go back"
          />
        </div>
      </div>
      <Copyright />
    </div>
  )
}

export default LastStep
