/* eslint-disable quotes */
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import Toggle from 'components/atoms/Toggle'
import Loading from 'components/Loading'
import Layout from 'containers/Layout'
import useForm from 'hooks/useForm'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { wait } from 'utils/wait'
import { yearList } from 'values/values'
console.log('🚀 ~ file: EducationStep.jsx ~ line 13 ~ yearList', yearList)

const EducationStep = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()

  //capture inputs

  const INITIAL_FIELDS = {
    education: '',
    grade: '',
    grade_subject: '',
    start_year: { id: '', name: '' },
    end_year: { id: '', name: '' },
    above_sixteen: false,
  }

  const ERROR_INITIAL_FIELDS = {
    education: '',
    grade: '',
    grade_subject: '',
    start_year: '',
    end_year: '',
    above_sixteen: '',
  }

  const { fields, onChange, errors, setFields, setErrors } = useForm(
    INITIAL_FIELDS,
    ERROR_INITIAL_FIELDS
  )

  const validateForm = () => {
    let isValid = true

    const trimmedLen = (field) => fields[field].trim().length

    if (trimmedLen('jobTitle') <= 0) {
      isValid = false
      errors.jobTitle = 'Job title could not be empty.'
    } else {
      isValid = true
      errors.jobTitle = ''
    }

    if (trimmedLen('latestCompany') <= 0) {
      isValid = false
      errors.latestCompany = 'This field is important.'
    } else {
      isValid = true
      errors.latestCompany = ''
    }

    setErrors({ ...errors })

    return isValid
  }

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const [saving, setSaving] = useState(false)

  const nextStep = () => {
    const isValid = validateForm()
    if (isValid) {
      setSaving(true)
      wait(3000).then(() => {
        setSaving(false)
        return history.push('/account/personal/edit-profile/location')
      })
    } else {
    }
  }

  const goBack = () => {
    history.push('/signup')
  }

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
          <div className="space-y-6">
            <FormInput
              label="Education"
              id="education"
              name="education"
              onChange={onChange}
              required
              type="text"
              error={errors.education}
              value={fields.education}
            />

            <FormInput
              label="Grade / title"
              id="grade"
              name="grade"
              onChange={onChange}
              error={errors.grade}
              required
              value={fields.grade}
            />
            <FormInput
              label="Graduation subject"
              id="grade_subject"
              name="grade_subject"
              onChange={onChange}
              error={errors.grade_subject}
              required
              value={fields.grade_subject}
            />
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="mt-6">
                <Selector
                  label={'Start year'}
                  list={yearList}
                  selectedItem={
                    fields.start_year.name
                      ? fields.start_year
                      : { id: 0, name: '-' }
                  }
                  onSelect={(item) =>
                    setFields({
                      ...fields,
                      start_year: { id: item.id, name: item.name },
                    })
                  }
                />
              </div>

              <div className="mt-6">
                <Selector
                  label={'End year (or expected)'}
                  list={yearList}
                  selectedItem={
                    fields.end_year.name
                      ? fields.end_year
                      : { id: 0, name: '-' }
                  }
                  onSelect={(item) =>
                    setFields({
                      ...fields,
                      end_year: { id: item.id, name: item.name },
                    })
                  }
                />
              </div>
            </div>
            <div>
              <Toggle
                enabled={fields.above_sixteen}
                text={"I'm over 16 years old"}
                setEnabled={() =>
                  setFields({ ...fields, above_sixteen: !fields.above_sixteen })
                }
              />
            </div>
            <div>
              <Button
                onClick={nextStep}
                onlyText
                rounded="rounded-lg"
                primary
                fullWidth
                loading={saving}
                label="I'm not a student"
              />
            </div>

            <div>
              <Button
                onClick={nextStep}
                fullWidth
                rounded="rounded-lg"
                gradient
                loading={saving}
                label="Next Step"
              />
            </div>
          </div>
        </div>
        <div className="my-4">
          <Button
            onClick={goBack}
            rounded="rounded-lg"
            gradient
            size="sm"
            label="Go back"
          />
        </div>
      </div>
    </Layout>
  )
}

export default EducationStep
