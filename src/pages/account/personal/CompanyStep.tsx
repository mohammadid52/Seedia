import AnimatedDiv from 'components/animation/AnimatedDiv'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import TextButton from 'components/atoms/TextButton'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { useUserContext } from 'context/UserContext'
import { Form, Formik } from 'formik'
import { getAccessToken, network, renderPathByType } from 'helpers'
import { PersonalStepOne } from 'initials'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

const CompanyStep = ({ user }: { user?: IParent }) => {
  const [isLoaded] = useState(true)
  const history = useHistory()

  console.log('I am on company page')

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
    jobTitle: any
    jobType: any
    currentCompany: any
  }) => {
    setSaving(true)
    try {
      const token = getAccessToken()
      let updatedData = {
        ...user,
        company: {
          ...user?.company,
          jobTitle: values.jobTitle,
          jobType: values.jobType,
          currentCompany: values.currentCompany,
          companyName: values.currentCompany,
        },
        other: {
          ...user?.other,
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

      history.push(links.LOCATION_P)
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
          onClick={() => history.push(links.EDUCATION)}
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
            initialValues={PersonalStepOne}
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
