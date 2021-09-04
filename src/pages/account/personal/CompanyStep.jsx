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

import { getAccessToken, network } from 'helpers'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import { isEmpty } from 'lodash'
import { useUserContext } from 'context/UserContext'

const CompanyStep = ({ user }) => {
  const [isLoaded] = useState(true)
  const history = useHistory()

  const [initialState, setInitialState] = useState(PersonalStepOne)

  const company = user?.company || ''

  useEffect(() => {
    if (!isEmpty(company) && company.jobTitle) {
      setInitialState({
        jobTitle: company.jobTitle,
        jobType: company.jobType,
        currentCompany: company.currentCompany,
      })
    }
  }, [company])

  const { setValues } = useUserContext()
  const onSubmit = async (values) => {
    setSaving(true)
    try {
      const token = getAccessToken()
      let updatedData = {
        ...user,
        company: {
          ...user.company,
          jobTitle: values.jobTitle,
          jobType: values.jobType,
          currentCompany: values.currentCompany,
          companyName: values.currentCompany,
        },
        other: {
          ...user.other,
          accountFinishedStep: 'company',
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
    currentCompany: Yup.string().required(
      'Please add your current company name'
    ),
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
                label="Current Company"
                id="currentCompany"
                name="currentCompany"
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

export default CompanyStep
