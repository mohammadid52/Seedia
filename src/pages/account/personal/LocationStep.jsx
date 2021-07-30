import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import TextButton from 'components/atoms/TextButton'
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

  const { fields, onChange, errors, setFields } = useForm(
    INITIAL_FIELDS,
    ERROR_INITIAL_FIELDS
  )
  const [saving, setSaving] = useState(false)

  const nextStep = () => {
    const isValid = true
    if (isValid) {
      setSaving(true)
      wait(3000).then(() => {
        setSaving(false)
        return history.push('/dashboard')
      })
    } else {
    }
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
        <TextButton
          text="Go back"
          onClick={goBack}
          className="inline-block mt-4"
        />
      </div>
      <Copyright />
    </div>
  )
}

export default LastStep
