import React, { useState } from 'react'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import TextButton from 'components/atoms/TextButton'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { useHistory } from 'react-router-dom'
import { wait } from 'utils/wait'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { PersonalStepOne } from 'initials'
import { useUserContext } from 'context/UserContext'

const StudentSecondStep = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()
  const { values, setValues } = useUserContext()
  console.log(
    '🚀 ~ file: CompanyStep.jsx ~ line 20 ~ StudentSecondStep ~ values',
    values
  )

  //capture inputs

  const jobList = [
    { id: '1', name: 'Web Developer' },
    { id: '2', name: 'Web Designer' },
  ]

  const onSubmit = (_values) => {
    setSaving(true)
    wait(3000).then(() => {
      setSaving(false)
      setValues({
        ...values,
        personal: {
          ...values.personal,
          company: {
            ...values.company,
            jobType: selectedJobType,
            jobTitle: _values.jobTitle,
            latestCompany: _values.latestCompany,
          },
        },
      })
      history.push(links.PERSONAL_STEP_2)
    })
  }

  const validationSchema = Yup.object({
    jobTitle: Yup.string().required('Please add this field'),
    latestCompany: Yup.string().required('Please add this field'),
  })

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const [saving, setSaving] = useState(false)

  const goBack = () => {
    history.goBack()
  }

  const [selectedJobType, setSelectedJobType] = useState('')

  return !isLoaded ? (
    <Loading />
  ) : (
    <Layout
      title="Company Information"
      subtitle={
        <p>
          Your profile helps you find new people and <br /> oppurtunites
        </p>
      }
    >
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={PersonalStepOne}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <FormInput
                label="Most recent job title"
                id="jobTitle"
                name="jobTitle"
                required
              />
              <div className="mt-6">
                <Selector
                  label={'Job Type'}
                  placeholder="Select one"
                  list={jobList}
                  selectedItem={selectedJobType}
                  onSelect={(item) => setSelectedJobType(item.name)}
                />
              </div>
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
        <TextButton
          text="Go back"
          onClick={goBack}
          className="inline-block mt-4"
        />
      </div>
    </Layout>
  )
}

export default StudentSecondStep
