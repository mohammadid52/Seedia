import { useEffect, useState } from 'react'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import TextButton from 'components/atoms/TextButton'
import Loading from 'components/Loading'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { PersonalStepTwo } from 'initials'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { map } from 'lodash'
import { network } from 'helpers'
import FormSelector from 'components/atoms/FormSelector'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import { setUser } from 'state/Redux/Actions/authActions'
import { useDispatch } from 'react-redux'

const yourhandle = require('countrycitystatejson')

const LastStep = ({ accountType = 'personal', user }) => {
  const [isLoaded, setIsLoaded] = useState(true)
  const history = useHistory()

  const [saving, setSaving] = useState(false)

  const goBack = () => {
    history.push(
      accountType === 'personal' ? links.PERSONAL_STEP_1 : links.STUDENT_STEP_1
    )
  }

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

  const dispatch = useDispatch()

  const onSubmit = async (values) => {
    try {
      setSaving(true)
      const { data } = await network.post('/user/update', {
        location: {
          country: values.country,
          pincode: values.pincode,
          state: values.state,
          city: values.city,
        },
        accountFilled: true,
      })

      dispatch(setUser(data.data))

      history.push(links.DASHBAORD)
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
  }
  const validationSchema = Yup.object({
    state: Yup.string().required(),
    country: Yup.string().required(),
    city: Yup.string().required(),
    pincode: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(6, 'Must be exactly 6 digits')
      .max(6, 'Must be exactly 6 digits'),
  })

  const [selectedLocation, setSelectedLocation] = useState({
    country: { shortName: '', longName: '' },
    state: '',
    city: '',
  })

  const countries = yourhandle.getCountries()

  const disabledItem = (msg) => [
    {
      name: msg,
      disabled: true,
    },
  ]

  const updateStates = (shortName) => {
    const states = yourhandle.getStatesByShort(shortName)
    const updated = map(states, (state) => ({ name: state }))
    if (updated && updated.length > 0) {
      setStateList(updated)
    } else {
      setStateList(disabledItem('No state found for selected country.'))
    }
  }

  const updateCities = (shortName, state) => {
    const cities = yourhandle.getCities(shortName, state)
    const updated = map(cities, (city) => ({ name: city }))

    if (updated && updated.length > 0) {
      setCityList(updated)
    } else {
      setCityList(disabledItem('No city found for selected state.'))
    }
  }

  const [stateList, setStateList] = useState([])

  const [cityList, setCityList] = useState([])

  return !isLoaded ? (
    <Loading />
  ) : (
    <Layout
      title={`Welcome, ${user?.firstName || 'Human'}!`}
      subtitle={
        <p>
          Create a profile, connect with acquaintances and discuss topics that
          interest you.
        </p>
      }
    >
      <AnimatedDiv className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white  border border-transparent dark:border-gray-700  dark:bg-gray-800 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={PersonalStepTwo}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <div>
                <FormSelector
                  label={'Country / region'}
                  list={countries}
                  name="country"
                  required
                  placeholder={'Select country'}
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
              <div>
                <FormSelector
                  label="State"
                  list={stateList}
                  name="state"
                  required
                  placeholder={'Select state'}
                  onSelect={(item) => {
                    updateCities(selectedLocation.country.shortName, item.name)
                    setSelectedLocation({
                      ...selectedLocation,
                      state: item.name,
                    })
                  }}
                />
              </div>

              <div>
                <FormSelector
                  label={'Ctiy'}
                  name="city"
                  list={cityList}
                  required
                  placeholder={'Select city'}
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
                placeholder="Postal Code"
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
          text="Edit company details"
          onClick={goBack}
          className="inline-block mt-4"
        />
      </AnimatedDiv>
    </Layout>
  )
}

export default LastStep
