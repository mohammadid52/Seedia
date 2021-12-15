/* eslint-disable quotes */
import AnimatedDiv from 'components/animation/AnimatedDiv'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import TextButton from 'components/atoms/TextButton'
import Toggle from 'components/atoms/Toggle'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { useUserContext } from 'context/UserContext'
import { Form, Formik } from 'formik'
import { getAccessToken, network, renderPathByType } from 'helpers'
import { StudentStepOne } from 'initials'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { yearList, yearListWithFuture } from 'values/values'
import * as Yup from 'yup'

const EducationStep = ({ user }) => {
  const history = useHistory()

  const [saving, setSaving] = useState(false)

  const redirection = () => {
    if (user) {
      if (!user?.other?.accountFilled) {
        if (user.other?.accountType === 'education') {
          if (user.other?.accountFinishedStep === 'location') {
            // redirect to choose template page
            console.log('redirect to choose template page')
            return history.push(links.CHOOSE_TEMPLATE)
          } else if (user.other?.accountFinishedStep === 'education') {
            // redirect to location page
            console.log('redirect to location page')
            return history.push(links.LOCATION_S)
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
          if (user && user.other) {
            console.log('get the accountType and redirect as per account type')
            // get the accountType and redirect as per account type
            return history.push(renderPathByType(user.other.accountType))
          }
        }
      } else {
        //  redirect to dashboard
        console.log('redirect to dashboard')
        return history.push(links.FEED)
      }
    }
  }

  useEffect(() => {
    redirection()
  }, [user?.other?.accountFilled, user?.other?.accountFinishedStep])

  const { setValues } = useUserContext()

  const onSubmit = async (values) => {
    try {
      const token = getAccessToken()

      setSaving(true)
      const updatedData = {
        ...user,
        background: {
          ...user.background,
          education: [
            {
              id: nanoid(9),
              name: values.education,
              grade: values.grade,
              grade_subject: values.grade_subject,
              from: fields.start_year,
              to: fields.end_year,
            },
          ],
        },
        other: {
          ...user.other,
          accountFinishedStep: 'education',
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

      history.push(links.STUDENT_STEP_2)
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
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

  return (
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
        <div className="bg-white dark:bg-gray-900 border border-white dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          <Formik
            initialValues={StudentStepOne}
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
