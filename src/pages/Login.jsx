import { useState } from 'react'
import Button from 'components/atoms/Button'
import Layout from 'containers/Layout'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { LOGIN } from 'initials'
import FormInput from 'components/atoms/FormInput'
import { links } from 'constants/Links'
import { useHistory } from 'react-router-dom'
import { getAccessToken, network } from 'helpers'
import { useUserContext } from 'context/UserContext'
import Error from 'components/alerts/Error'
import Captcha from 'components/Captcha'
import AnimatedDiv from 'components/animation/AnimatedDiv'

const Login = () => {
  const history = useHistory()
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Please add email address'),
    password: Yup.string().required('Please add password').min(6).max(20),
  })

  const { setValues } = useUserContext()
  const token = getAccessToken()

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [isVerified, setIsVerified] = useState(false)

  const onSubmit = async (values) => {
    if (isVerified) {
      setLoading(true)
      try {
        const { data } = await network.post(
          '/auth/login',
          {
            email: values.email,
            password: values.password,
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

          setValues({ ...data.data, ...data })

          history.push(links.DASHBAORD)
          localStorage.setItem('access_token', data.data.access_token)
        }
      } catch (error) {
        setErrors([...errors, error.message])
      } finally {
        setLoading(false)
      }
    } else {
      setErrors([...errors, 'Please verify captcha'])
    }
  }

  return (
    <>
      <Layout
        title="Sign in to your account"
        subtitle={
          <span className="mt-1 text-center dark:text-gray-400 text-sm text-gray-600">
            Stay updated on your professional world
          </span>
        }
      >
        <AnimatedDiv className="mt-8 mb-36 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
            <Formik
              initialValues={LOGIN}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="space-y-6">
                <FormInput label="Email" id="email" name="email" required />

                <FormInput
                  label="password"
                  id="password"
                  name="password"
                  required
                  showPasswordButton
                />

                <Captcha setIsVerified={setIsVerified} />
                <div
                  onClick={() => history.push(links.FORGOT_PASSWORD)}
                  className="dark:text-gray-400 py-2 inline-block text-gray-600 normal-hover cursor-pointer"
                >
                  Forgot password?
                </div>

                <div>
                  <Button
                    type="submit"
                    fullWidth
                    rounded="rounded-lg"
                    gradient
                    loading={loading}
                    label="Login"
                  />
                </div>

                <div hidden={errors.length === 0}>
                  <Error errors={errors} />
                </div>
              </Form>
            </Formik>
          </div>
          <div className="mt-4 text-center text-gray-900 dark:text-white">
            Not yet on 13RMS?
            <a href="/signup" className="gradient-text ml-2 font-semibold ">
              Join now
            </a>
          </div>
        </AnimatedDiv>
      </Layout>
    </>
  )
}
export default Login
