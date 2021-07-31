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
import { links } from 'constants/Links'

const LocationStep = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()

  //capture inputs

  const locationList = [{ id: 1, name: 'India' }]

  const [saving, setSaving] = useState(false)

  const initialValues = {
    country: '',
    pincode: '',
  }

  const validationSchema = Yup.object({
    country: Yup.string().required('Please add country'),
    pincode: Yup.string().required('Please add pincode'),
  })

  const onSubmit = () => {
    setSaving(true)
    wait(3000).then(() => {
      setSaving(false)
      return history.push(links.DASHBAORD)
    })
  }

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)
  const [fields, setFields] = useState({ location_within_area: '' })

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
            initialValues={initialValues}
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
                  placeholder={'Select location'}
                  selectedItem={fields.location_within_area}
                  onSelect={(item) =>
                    setFields({
                      ...fields,
                      location_within_area: item.name,
                    })
                  }
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
          onClick={history.goBack}
          text="Go back"
          className="inline-block mt-4"
        />
      </div>
      <Copyright />
    </div>
  )
}

export default LocationStep
