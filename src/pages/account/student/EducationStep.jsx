/* eslint-disable quotes */
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import TextButton from 'components/atoms/TextButton'
import Toggle from 'components/atoms/Toggle'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { wait } from 'utils/wait'
import { yearList, yearListWithFuture } from 'values/values'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { StudentStepOne } from 'initials'
import { useUserContext } from 'context/UserContext'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import { isEmpty } from 'lodash'

const EducationStep = ({ user }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()
  const { values, setValues } = useUserContext()

  const [initialState, setInitialState] = useState(StudentStepOne)

  // const education = user.education

  // useEffect(() => {
  //   if (!isEmpty(education) && education.jobTitle) {
  //     setInitialState({
  //       jobTitle: company.jobTitle,
  //       jobType: company.jobType,
  //       latestCompany: company.latestCompany,
  //     })
  //   }
  // }, [company])
  //capture inputs

  const [saving, setSaving] = useState(false)

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

  const onSubmit = (_values) => {
    setSaving(true)
    wait(3000).then(() => {
      setSaving(false)
      setValues({
        ...values,
        student: {
          ...values.student,
          education: {
            ...values.education,
            education: _values.education,
            grade: _values.grade,
            grade_subject: _values.grade_subject,
            start_year: fields.start_year,
            end_year: fields.end_year,
          },
        },
      })
      history.push(links.STUDENT_STEP_2)
    })
  }

  const validationSchema = Yup.object({
    education: Yup.string().required('Please add education'),
    grade: Yup.string().required('Please add grade'),
    grade_subject: Yup.string().required('Please add grade subject'),
  })

  const [fields, setFields] = useState({
    start_year: '',
    end_year: '',
    above_sixteen: false,
  })

  return !isLoaded ? (
    <Loading />
  ) : (
    <Layout
      title="Education Information"
      withButton={
        <TextButton
          text="or create a business account"
          onClick={() => history.push(links.BUSINESS_STEP_1)}
        />
      }
      subtitle={
        <p>
          Your profile helps you find new people and <br /> oppurtunites
        </p>
      }
    >
      <AnimatedDiv className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 border border-white dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            <Form className="space-y-6">
              <FormInput
                label="Education"
                id="education"
                name="education"
                required
              />

              <FormInput
                label="Grade / title"
                id="grade"
                name="grade"
                required
              />
              <FormInput
                label="Graduation subject"
                id="grade_subject"
                name="grade_subject"
                required
              />
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="">
                  <Selector
                    label={'Start year'}
                    list={yearList}
                    selectedItem={fields.start_year}
                    placeholder={'-'}
                    onSelect={(item) =>
                      setFields({
                        ...fields,
                        start_year: item.name,
                      })
                    }
                  />
                </div>

                <div className="">
                  <Selector
                    label={'End year (or expected)'}
                    placeholder={'-'}
                    list={yearListWithFuture}
                    selectedItem={fields.end_year}
                    onSelect={(item) =>
                      setFields({
                        ...fields,
                        end_year: item.name,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <Toggle
                  className="mt-2"
                  enabled={fields.above_sixteen}
                  text={"I'm over 16 years old"}
                  setEnabled={() =>
                    setFields({
                      ...fields,
                      above_sixteen: !fields.above_sixteen,
                    })
                  }
                />
              </div>
              <div>
                <TextButton
                  color="gray"
                  onClick={() => history.push(links.CHOOSE_ACCOUNT)}
                  text={"I'm not a student"}
                  className="text-center py-2"
                />
              </div>

              <div>
                <Button
                  fullWidth
                  rounded="rounded-lg"
                  gradient
                  type="submit"
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

export default EducationStep
