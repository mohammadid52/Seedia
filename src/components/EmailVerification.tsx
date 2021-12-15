import { useFormik } from 'formik'
import { network } from 'helpers'
import { useState } from 'react'
import * as Yup from 'yup'
import Button from './atoms/Button'
import NormalFormInput from './atoms/NormalFormInput'
import Lottie from 'react-lottie'
import animationData from 'assets/animation/sendingmail.json'
import errorIcon from 'assets/images/error.png'

const EmailVerification = ({
  onCancel,
  setEmailVerified,
  emailSendingStatus = 'initial',
}: {
  setEmailVerified?: React.Dispatch<React.SetStateAction<boolean>>
  onCancel: () => void
  emailSendingStatus?: string
}) => {
  const validationSchema = Yup.object({
    code: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(6, 'Verification must be six digits long')
      .max(6, 'Verification must be six digits long'),
  })

  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: {
      code: '',
    },
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem('v_token')
        const { data } = await network.post('/user/verifyCode', {
          code: values.code,
          token,
        })

        if (data.data.verified) {
          setError('')
          onCancel()
          if (setEmailVerified) {
            setEmailVerified(true)
          }
          localStorage.removeItem('v_token')
        } else {
          setError(data.message)
        }
      } catch (error) {
        console.error('@genCode: ', error.message)
      }
    },
    validationSchema,
  })

  const onChange = (e: any) => {
    formik.handleChange(e)
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      {emailSendingStatus === 'sent' && (
        <form onSubmit={formik.handleSubmit}>
          <NormalFormInput
            success={formik.values.code.length === 6}
            onChange={onChange}
            value={formik.values.code}
            autoComplete={false}
            label="Verification code"
            name="code"
            error={formik.errors.code || error}
            id="code"
          />
          <div className="mt-5 sm:mt-4 flex justify-end  items-center">
            <Button gradient label="Verify" type="submit" />
          </div>
        </form>
      )}
      {emailSendingStatus === 'failed' && (
        <div className="flex flex-col items-center justify-center">
          <img src={errorIcon} alt="" className="h-32 w-32 mb-4" />
          <h3 className="text-center font-semibold text-lg">
            Oops! Something went wrong
          </h3>
          <input className="h-0 w-0" />
        </div>
      )}
      {emailSendingStatus === 'sending' && (
        <div className="flex flex-col items-center justify-center">
          <Lottie
            isStopped={false}
            isPaused={false}
            options={defaultOptions}
            height={400}
            width={400}
          />
          <h3 className="dark:text-white text-center font-semibold text-lg">
            Sending Verification Code
            <br />
            To Your Inbox
          </h3>
          <input className="h-0 w-0" />
        </div>
      )}
    </div>
  )
}

export default EmailVerification
