import Button from 'components/atoms/Button'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import EmailVerification from 'components/EmailVerification'
import Layout from 'containers/Layout'
import emailjs from 'emailjs-com'
import { useFormik } from 'formik'
import { network } from 'helpers'
import useBoolean from 'hooks/useBoolean'
import { useState } from 'react'
import { mailConfig } from 'state/config'
import * as Yup from 'yup'
import animationData from 'assets/animation/success.json'
import Lottie from 'react-lottie'
import moment from 'moment'

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const ForgotPassword = () => {
  const [showModal, onShow, onCancel] = useBoolean()
  const [emailSendingStatus, setEmailSendingStatus] = useState('initial')

  const onResetMailSend = (email: string, link: string, expiresIn: string) => {
    // @ts-ignore
    onShow()
    setEmailSendingStatus('sending')
    emailjs
      .send(
        mailConfig.serviceID,
        mailConfig.template.resetPassordTemplateId,
        {
          link,
          to_email: email,
          expiresIn: moment(Number(expiresIn)).format('LT'),
        },
        mailConfig.userId
      )
      .then(
        (result) => {
          // @ts-ignore
          onCancel()
          setEmailSendingStatus('sent')
        },
        (error) => {
          setEmailSendingStatus('failed')
        }
      )
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Please add verified email address'),
  })

  const [verifyingEmail, setVerifyingEmail] = useState(false)

  const [error, setError] = useState('')

  const verifyEmail = async (email: string, successCallback: any) => {
    setVerifyingEmail(true)
    try {
      const { data } = await network.post('/user/verifyEmail', { email })

      if (data.data.verified) {
        if (typeof successCallback === 'function') {
          const { link, expiresIn } = data.data
          setError('')
          successCallback(link, expiresIn)
        }
      } else {
        setError(data.message)
      }
    } catch (error) {
      console.error(
        `@error while verifyng email. @verifyEmail: `,
        error.message
      )
    } finally {
      setVerifyingEmail(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values: { email: string }) => {
      verifyEmail(values.email, (link: string, expiresIn: string) =>
        onResetMailSend(values.email, link, expiresIn)
      )
    },
    validationSchema,
  })

  return (
    <>
      {showModal && emailSendingStatus !== 'sent' && (
        <Modal
          //  @ts-ignore
          open={showModal}
          //  @ts-ignore
          setOpen={onCancel}
          hideCloseBtn={emailSendingStatus !== 'failed'}
        >
          <EmailVerification
            emailSendingStatus={emailSendingStatus}
            //  @ts-ignore
            onCancel={onCancel}
          />
          <input className="h-0 w-0" />
        </Modal>
      )}
      <Layout title="Reset password">
        <div className="mt-8 mb-36 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-900 border border-transparent dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
            {emailSendingStatus !== 'sent' && (
              <form onSubmit={formik.handleSubmit}>
                <NormalFormInput
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  autoComplete={false}
                  label="Please enter verified email"
                  name="email"
                  error={formik.errors.email || error}
                  id="email"
                />
                <div className="mt-5 sm:mt-4 flex justify-end  items-center">
                  <Button
                    gradient
                    disabled={
                      verifyingEmail || emailSendingStatus === 'sending'
                    }
                    loading={verifyingEmail || emailSendingStatus === 'sending'}
                    loadingText={
                      verifyingEmail
                        ? 'Verifying your email'
                        : 'Sending reset link'
                    }
                    label="Send Reset Request"
                    fullWidth
                    type="submit"
                  />
                </div>
              </form>
            )}
            {emailSendingStatus === 'sent' && (
              <div>
                <Lottie options={defaultOptions} height={300} width={300} />
                <p className="text-center dark:text-white">
                  We have sent a reset link to your email.
                  <br /> Please check your inbox.
                </p>
                <p className="text-center dark:text-gray-400 mt-4">
                  Link not received yet?{' '}
                  <span
                    onClick={() => setEmailSendingStatus('initial')}
                    className="hover:underline cursor-pointer"
                  >
                    resend email
                  </span>{' '}
                </p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ForgotPassword
