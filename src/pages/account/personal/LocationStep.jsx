import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import TextButton from 'components/atoms/TextButton'
import Copyright from 'components/Copyright'
import Loading from 'components/Loading'

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { wait } from 'utils/wait'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { PersonalStepTwo } from 'initials'

const LastStep = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()

  //capture inputs

  const locationList = [{ id: 1, name: 'India' }]

  const [saving, setSaving] = useState(false)

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const goBack = () => {
    history.push('/account/personal/edit-profile/company')
  }

  const onSubmit = (values) => {
    setSaving(true)
    wait(3000).then(() => {
      setSaving(false)
      history.push('/dashboard')
    })
  }

  const validationSchema = Yup.object({
    country: Yup.string().required('Please add this field'),
    pincode: Yup.string().required('Please add this field'),
  })

  const [selectedLocation, setSelectedLocation] = useState('')

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
          <Formik
            initialValues={PersonalStepTwo}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <FormInput
                label="Country / region"
                id="country"
                name="country"
                required
              />

              <FormInput
                label="Postal Code"
                id="pincode"
                name="pincode"
                required
              />
              <div className="mt-6">
                <Selector
                  label={'Location within this area'}
                  list={locationList}
                  selectedItem={selectedLocation}
                  placeholder={'Select location'}
                  onSelect={(item) => setSelectedLocation(item.name)}
                />
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
