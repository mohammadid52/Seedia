import ErrorAnimation from 'components/atoms/animation/ErrorAnimation'
import Button from 'components/atoms/Button'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { useFormik } from 'formik'
import { network } from 'helpers'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import * as Yup from 'yup'

const ResetPassword = () => {
  const route: any = useParams()

  const [showResetFields, setShowResetFields] = useState(false)

  const [error, setError] = useState('')

  const verifyToken = async () => {
    try {
      const { data } = await network.post(
        `/user/verifyResetToken/${route?.token}`
      )
      if (data.data.success) {
        setError('')
        setShowResetFields(true)
      } else {
        setShowResetFields(false)
        setError(data.message)
      }
    } catch (error) {
      setShowResetFields(false)
      setError('Something went wrong')
    }
  }

  const history = useHistory()
  const updatePassword = async (newPassword: string) => {
    try {
      setSaving(true)
      const { data } = await network.post(
        `/user/updatePassword/${route.token}`,
        {
          newPassword,
        }
      )
      if (data.status === 'error') {
        setError(data.message)
      }
      history.push(links.LOGIN)
    } catch (error) {
      setError('Something went wrong')
      console.error(error)
      setSaving(false)
    }
  }

  useEffect(() => {
    if (route.token) {
      verifyToken()
    }
  }, [])

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(6, 'Password must be atleast 6 characters long')
      .required('Please enter new password'),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Password must match')
      .required('Please enter confirm password'),
  })

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    onSubmit: async (values) => {
      updatePassword(values.confirmNewPassword)
    },
    validationSchema,
  })

  const [saving, setSaving] = useState(false)

  return (
    <Layout title="Set new password">
      <div className="mt-8 mb-36 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
          {error && (
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center font-medium text-xl dark:text-gray-400">
                {error}
              </h3>
              <ErrorAnimation />
            </div>
          )}
          {!error && showResetFields && (
            <form
              className="flex flex-col space-y-4"
              onSubmit={formik.handleSubmit}
            >
              <NormalFormInput
                onChange={formik.handleChange}
                value={formik.values.newPassword}
                autoComplete={false}
                type="password"
                showPasswordButton
                label="New password"
                name="newPassword"
                error={formik.errors.newPassword || error}
                id="newPassword"
              />
              <NormalFormInput
                onChange={formik.handleChange}
                value={formik.values.confirmNewPassword}
                autoComplete={false}
                type="password"
                showPasswordButton
                label="Confirm new password"
                name="confirmNewPassword"
                error={formik.errors.confirmNewPassword || error}
                id="confirmNewPassword"
              />
              <div className="mt-5 sm:mt-4 flex justify-end  items-center">
                <Button
                  loading={saving}
                  disabled={saving}
                  loadingText="Changing password"
                  gradient
                  fullWidth
                  label="Save"
                  type="submit"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ResetPassword
