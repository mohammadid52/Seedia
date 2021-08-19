import { useEffect, useState } from 'react'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import TextButton from 'components/atoms/TextButton'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { useHistory } from 'react-router-dom'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { PersonalStepOne } from 'initials'

import { network } from 'helpers'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import { isEmpty } from 'lodash'
import { setUser } from 'state/Redux/Actions/authActions'
import { useDispatch } from 'react-redux'

const StudentSecondStep = ({ user }) => {
  const [isLoaded, setIsLoaded] = useState(true)
  const history = useHistory()

  const [initialState, setInitialState] = useState(PersonalStepOne)

  const company = user.company

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

  useEffect(() => {
    if (!isEmpty(company) && company.jobTitle) {
      setInitialState({
        jobTitle: company.jobTitle,
        jobType: company.jobType,
        latestCompany: company.latestCompany,
      })
    }
  }, [company])

  const dispatch = useDispatch()

  const onSubmit = async (values) => {
    setSaving(true)
    try {
      const { data } = await network.post('/user/update', {
        company: {
          jobTitle: values.jobTitle,
          jobType: values.jobType,
          latestCompany: values.latestCompany,
        },
      })
      dispatch(setUser(data.data))

      history.push(links.PERSONAL_STEP_2)
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  const validationSchema = Yup.object({
    jobTitle: Yup.string().required('Please add your job title'),
    jobType: Yup.string().required('Please add your job type'),
    latestCompany: Yup.string().required('Please add your latest company name'),
  })

  const [saving, setSaving] = useState(false)

  return !isLoaded ? (
    <Loading />
  ) : (
    <Layout
      title="Company Information"
      withButton={
        <TextButton
          text="or create a student account"
          onClick={() => history.push(links.STUDENT_STEP_1)}
        />
      }
      subtitle={
        <p>
          Your profile helps you find new people and <br /> oppurtunites
        </p>
      }
    >
      <AnimatedDiv className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700  py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            <Form className="space-y-6">
              <FormInput
                label="Most recent job title"
                id="jobTitle"
                name="jobTitle"
                required
              />
              <FormInput
                label="Job Type"
                id="jobType"
                name="jobType"
                required
              />

              <FormInput
                label="Latest Company"
                id="latestCompany"
                name="latestCompany"
                required
              />

              <div>
                <Button
                  type="submit"
                  fullWidth
                  rounded="rounded-lg"
                  gradient
                  loading={saving}
                  label="Next Step"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </AnimatedDiv>
    </Layout>
  )
}

export default StudentSecondStep
