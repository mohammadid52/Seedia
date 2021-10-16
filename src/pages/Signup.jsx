import Error from 'components/alerts/Error'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Modal from 'components/atoms/Modal'
import Captcha from 'components/Captcha'
import EmailVerification from 'components/EmailVerification'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { useUserContext } from 'context/UserContext'
import emailjs from 'emailjs-com'
import { Form, Formik } from 'formik'
import { getAccessToken, network } from 'helpers'
import useBoolean from 'hooks/useBoolean'
import { SIGNUP } from 'initials'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { mailConfig } from 'state/config'
import * as Yup from 'yup'

const Signup = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please add email address'),
    password: Yup.string()
      .min(6, 'Password must be atleast 6 characters long')
      .required('Please add password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Please add confirm password'),
  })

  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState([])

  const history = useHistory()

  const { setValues } = useUserContext()
  const [isVerified, setIsVerified] = useState(false)

  const [emailVerified, setEmailVerified] = useState(false)

  const onSubmit = async (_values) => {
    if (true) {
      try {
        setSaving(true)
        const updatedData = {
          password: _values.password,
          firstName: _values.firstName,
          lastName: _values.lastName,
          email: _values.email,
          followers: [],
          following: [],
          fullName: _values.firstName + ' ' + _values.lastName,
          other: {
            createdOn: new Date(),
            accountFilled: false,
            accountFinishedStep: 'signup',
          },
        }
        const token = getAccessToken()

        const { data } = await network.post(
          '/auth/register',
          {
            ...updatedData,
          },
          {
            headers: { Authorization: token },
          }
        )

        if (data.status === 'error') {
          if (!errors.includes(data.message)) {
            setErrors([...errors, data.message])
          }
        } else {
          setErrors([])
          localStorage.setItem('access_token', data.data.access_token)

          delete updatedData.password
          delete updatedData.access_token
          setValues({ ...updatedData })
          history.push(links.CHOOSE_ACCOUNT)
          window.location.reload()
        }
      } catch (error) {
        setErrors([...errors, error.message])

        console.error(error)
      } finally {
        setSaving(false)
      }
    } else {
      if (!emailVerified) {
        setErrors(['Email not verified. Please verify your email'])
      } else {
        setErrors(['Please verify captcha'])
      }
    }
  }

  const [showModal, onShow, onCancel] = useBoolean()

  const [emailSendingStatus, setEmailSendingStatus] = useState('initial')

  const sendEmail = (toEmail, toName, code) => {
    setEmailSendingStatus('sending')
    emailjs
      .send(
        mailConfig.serviceID,
        mailConfig.template.verificationTemplateId,
        {
          to_name: toName,
          code,
          to_email: toEmail,
        },
        mailConfig.userId
      )
      .then(
        (result) => {
          setEmailSendingStatus('sent')
        },
        (error) => {
          setEmailSendingStatus('failed')
        }
      )
  }
  const formRef = useRef()

  const genCode = async () => {
    try {
      const { data } = await network.post('/user/generateCode')

      setEmailSendingStatus('sending')
      onShow()
      if (data) {
        try {
          const code = data.data.code
          const token = data.data.token

          if (formRef?.current && formRef?.current?.values) {
            sendEmail(
              formRef?.current?.values.email,
              formRef?.current?.values.firstName || 'User',
              code
            )
          }
          localStorage.setItem('v_token', token)
          onShow()
        } catch (error) {
          setEmailSendingStatus('failed')
          console.error('@sendingmail: ', error.message)
        }
      }
    } catch (error) {
      console.error('@genCode: ', error.message)
    }
  }

  return (
    <>
      {showModal && (
        <Modal
          hideCloseBtn={emailSendingStatus !== 'failed'}
          // @ts-ignore
          open={showModal}
          // @ts-ignore
          setOpen={onCancel}
        >
          <EmailVerification
            emailSendingStatus={emailSendingStatus}
            setEmailVerified={setEmailVerified}
            onCancel={onCancel}
          />
        </Modal>
      )}
      <Layout
        title="Create new account"
        subtitle={
          <span className="mt-2 text-center text-sm text-gray-600">
            Discover the benefits of selling and <br />
            networking with your profile
          </span>
        }
      >
        <AnimatedDiv className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:border-gray-700 border border-transparent dark:bg-gray-900 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
            <Formik
              innerRef={formRef}
              initialValues={SIGNUP}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="space-y-6">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <FormInput
                    gridClass="sm:col-span-3"
                    label="First name"
                    id="firstName"
                    name="firstName"
                    required
                  />

                  <FormInput
                    gridClass="sm:col-span-3"
                    label="Last name"
                    id="lastName"
                    name="lastName"
                    required
                  />
                </div>

                <FormInput
                  label="Email"
                  id="email"
                  name="email"
                  required
                  disabled={emailVerified}
                  type="email"
                  withButton={
                    emailVerified ? (
                      <p className="text-green-500 italic text-xs">
                        Email Verified
                      </p>
                    ) : (
                      <button
                        onClick={genCode}
                        type="button"
                        className="cursor-pointer dark:text-blue-500 hover:underline text-blue-600"
                      >
                        Verify email
                      </button>
                    )
                  }
                />
                <FormInput
                  label="Password"
                  id="password"
                  name="password"
                  showPasswordButton
                  type="password"
                  required
                />
                <FormInput
                  label="Confirm password"
                  name="confirmPassword"
                  id="confirmPassword"
                  showPasswordButton
                  type="password"
                  required
                />

                <Captcha setIsVerified={setIsVerified} />

                <p className="my-4 text-left text-xs dark:text-gray-400 text-gray-600">
                  By clicking Agree and Join, you agree to 13RMS{' '}
                  <a
                    href="#/"
                    className="font-medium text-xs text-blue-600 hover:text-blue-500"
                  >
                    User Agreement, Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="#/"
                    className="font-medium text-xs text-blue-600 hover:text-blue-500"
                  >
                    Cookie Policy
                  </a>
                </p>
                <div hidden={errors.length === 0}>
                  <Error errors={errors} />
                </div>

                <div>
                  <Button
                    type="submit"
                    fullWidth
                    rounded="rounded-lg"
                    loading={saving}
                    gradient
                    label="Agree and become a member"
                  />
                </div>
              </Form>
            </Formik>
          </div>
          <div className="mt-4 text-center text-gray-900 dark:text-white">
            Already on 13RMS?
            <a href="/login" className="gradient-text ml-2 font-semibold ">
              Login now
            </a>
          </div>
        </AnimatedDiv>
      </Layout>
    </>
  )
}
export default Signup
