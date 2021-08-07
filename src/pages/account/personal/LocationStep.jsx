import React, { useState } from 'react'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import TextButton from 'components/atoms/TextButton'
import Loading from 'components/Loading'
import { useHistory } from 'react-router-dom'
import { wait } from 'utils/wait'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { PersonalStepTwo } from 'initials'
import { useUserContext } from 'context/UserContext'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { map } from 'lodash'

const yourhandle = require('countrycitystatejson')

const LastStep = ({ accountType = 'personal' }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()
  const { values, setValues } = useUserContext()

  const [saving, setSaving] = useState(false)

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const goBack = () => {
    history.push('/account/personal/edit-profile/company')
  }

  // for test purpose

  const addDataToLS = () => {
    window.localStorage.setItem(accountType, JSON.stringify(values.personal))
    window.localStorage.setItem('accountType', values.accountType)
    console.log(`Successfully added ${accountType} account to local storage`)
  }

  // const validateOtherFields = () => {
  //   let isValid = true
  //   const { country, state, city } = selectedLocation
  //   if (!country.longName || !country.shortName) {
  //     isValid = false
  //     errors.country = 'Please select country'
  //   } else {
  //     isValid = true
  //     errors.country = ''
  //   }
  //   if (!state) {
  //     isValid = false
  //     errors.state = 'Please select state'
  //   } else {
  //     isValid = true
  //     errors.state = ''
  //   }
  //   if (!city) {
  //     isValid = false
  //     errors.city = 'Please select city'
  //   } else {
  //     isValid = true
  //     errors.city = ''
  //   }

  //   setErrors({ ...errors })
  //   return isValid
  // }

  const onSubmit = (_values) => {
    try {
      setSaving(true)
      wait(3000).then(() => {
        setSaving(false)
        setValues({
          ...values,
          [accountType]: {
            ...values[accountType],
            location: {
              ...values.location,
              country: selectedLocation.country.longName,
              state: selectedLocation.state,
              city: selectedLocation.city,
              pincode: _values.pincode,
            },
          },
        })
        addDataToLS()
        history.push(links.DASHBAORD)
      })
    } catch (error) {
      console.error(error)
    }
  }
  const validationSchema = Yup.object({
    pincode: Yup.string().required('Please add this field'),
  })

  const [errors] = useState({
    country: '',
    state: '',
    city: '',
  })

  const [selectedLocation, setSelectedLocation] = useState({
    country: { shortName: '', longName: '' },
    state: '',
    city: '',
  })

  const countries = yourhandle.getCountries()

  const updateStates = (shortName) => {
    const states = yourhandle.getStatesByShort(shortName)
    const updated = map(states, (state) => ({ name: state }))
    setStateList(updated)
  }

  const updateCities = (shortName, state) => {
    const cities = yourhandle.getCities(shortName, state)
    const updated = map(cities, (city) => ({ name: city }))
    setCityList(updated)
  }

  const [stateList, setStateList] = useState([])

  const [cityList, setCityList] = useState([])

  return !isLoaded ? (
    <Loading />
  ) : (
    <Layout
      title="Welcome, Mohammad!"
      subtitle={
        <p>
          Create a profile, connect with acquaintances and discuss topics that
          interest you.
        </p>
      }
    >
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={PersonalStepTwo}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <div className="mt-6">
                <Selector
                  label={'Country / region'}
                  list={countries}
                  required
                  error={errors.country}
                  selectedItem={selectedLocation.country.longName}
                  placeholder={'Select location'}
                  onSelect={(item) => {
                    updateStates(item.shortName)
                    setSelectedLocation({
                      ...selectedLocation,
                      country: {
                        shortName: item.shortName,
                        longName: item.name,
                      },
                    })
                  }}
                />
              </div>
              <div className="mt-6">
                <Selector
                  label={'State'}
                  list={stateList}
                  error={errors.state}
                  required
                  selectedItem={selectedLocation.state}
                  placeholder={'Select location'}
                  onSelect={(item) => {
                    updateCities(selectedLocation.country.shortName, item.name)
                    setSelectedLocation({
                      ...selectedLocation,
                      state: item.name,
                    })
                  }}
                />
              </div>
              <div className="mt-6">
                <Selector
                  label={'Ctiy'}
                  list={cityList}
                  required
                  error={errors.city}
                  selectedItem={selectedLocation.city}
                  placeholder={'Select location'}
                  onSelect={(item) => {
                    setSelectedLocation({
                      ...selectedLocation,
                      city: item.name,
                    })
                  }}
                />
              </div>
              <FormInput
                label="Postal Code"
                id="pincode"
                name="pincode"
                required
              />

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
    </Layout>
  )
}

export default LastStep
