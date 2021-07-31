/* eslint-disable quotes */
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import TextButton from 'components/atoms/TextButton'
import Toggle from 'components/atoms/Toggle'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { wait } from 'utils/wait'
import { yearList, yearListWithFuture } from 'values/values'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const EducationStep = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()

  //capture inputs

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const [saving, setSaving] = useState(false)

  const onSubmit = (values) => {
    setSaving(true)
    wait(3000).then(() => {
      setSaving(false)
      history.push(links.STUDENT_STEP_2)
    })
  }

  const initialValues = {
    education: '',
    grade: '',
    grade_subject: '',
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
      subtitle={
        <p>
          Your profile helps you find new people and <br /> oppurtunites
        </p>
      }
    >
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
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
        <TextButton
          onClick={history.goBack}
          text="Go back"
          className="inline-block mt-4"
        />
      </div>
    </Layout>
  )
}

export default EducationStep
