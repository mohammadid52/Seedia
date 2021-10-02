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
import { map, orderBy } from 'lodash'
import { getAccessToken, network, renderPathByType } from 'helpers'
import FormSelector from 'components/atoms/FormSelector'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import { useUserContext } from 'context/UserContext'
import { IParent } from 'interfaces/UniversalInterface'

const yourhandle = require('countrycitystatejson')

const LastStep = ({ user }: { user?: IParent }) => {
  const [isLoaded] = useState(true)
  const history = useHistory()

  const [saving, setSaving] = useState(false)

  const goBack = () => {
    history.push(
      user && user.other && user?.other.accountType === 'personal'
        ? links.COMPANY
        : links.EDUCATION
    )
  }
  const redirection = () => {
    if (user) {
      if (!user?.other?.accountFilled) {
        if (user.other?.accountFinishedStep === 'location') {
          // redirect to choose template page
          console.log('redirect to choose template page')
          return history.push(links.CHOOSE_TEMPLATE)
        } else if (user.other?.accountFinishedStep === 'company') {
          // redirect to location page
          console.log('redirect to location page')
          return history.push(links.LOCATION_P)
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
        //  redirect to dashboard
        console.log('redirect to dashboard')
        return history.push(links.DASHBAORD)
      }
    }
  }

  useEffect(() => {
    redirection()
  }, [])

  const { setValues } = useUserContext()

  const onSubmit = async (values: {
    country: any
    pincode: any
    state: any
    city: any
  }) => {
    try {
      const token = getAccessToken()
      setSaving(true)

      let updatedData = {
        ...user,
        location: {
          ...user?.location,
          country: values.country,
          pincode: values.pincode,
          state: values.state,
          city: values.city,
          livesIn: `${values.city} ${values.country}`,
        },
        other: {
          ...user?.other,
          accountFilled: false,
          accountFinishedStep: 'location',
        },
      }
      await network.post(
        '/user/update',
        {
          ...updatedData,
        },
        {
          headers: { Authorization: token },
        }
      )

      //@ts-ignore
      delete updatedData.password
      setValues({ ...updatedData })

      history.push(links.CHOOSE_TEMPLATE)
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

  const disabledItem = (msg: string) => [
    {
      name: msg,
      disabled: true,
    },
  ]

  const updateStates = (shortName: string) => {
    const states = yourhandle.getStatesByShort(shortName)
    const updated = map(states, (state) => ({ name: state }))
    if (updated && updated.length > 0) {
      setStateList(updated)
    } else {
      setStateList(disabledItem('No state found for selected country.'))
    }
  }

  const updateCities = (shortName: string, state: any) => {
    const cities = yourhandle.getCities(shortName, state)
    const updated = map(cities, (city) => ({ name: city }))

    if (updated && updated.length > 0) {
      setCityList(updated)
    } else {
      setCityList(disabledItem('No city found for selected state.'))
    }
  }

  const [stateList, setStateList] = useState<any[]>([])

  const [cityList, setCityList] = useState<any>([])

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
                  list={orderBy(countries, ['name', 'asc'])}
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
