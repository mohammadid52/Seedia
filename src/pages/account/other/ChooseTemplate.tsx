import Layout from 'containers/Layout'
import { useEffect } from 'react'
import { classNames } from 'utils/classNames'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import { links } from 'constants/Links'
import { getAccessToken, network } from 'helpers'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import Error from 'components/alerts/Error'
import { useUserContext } from 'context/UserContext'
import { IParent } from 'interfaces/UniversalInterface'

const settings = [
  {
    name: 'Template One',
    description: '',
  },
  {
    name: 'Template Two',
    description: '',
  },
]

const ChooseTemplate = ({ user }: { user: IParent }) => {
  const [selected, setSelected] = useState(settings[0])
  const history = useHistory()

  const [loading, setLoading] = useState(false)

  /**
   * Check if account is already selected
   */

  const checkAccount = () => {
    if (
      user &&
      user.other &&
      user?.other.hasOwnProperty('accountFilled') &&
      user.other.accountFilled
    ) {
      return history.push(links.DASHBAORD)
    }
  }
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    checkAccount()
  }, [])
  const { setValues } = useUserContext()

  const onNext = async () => {
    try {
      setLoading(true)

      const token = getAccessToken()

      const updatedData = {
        ...user,
        other: {
          ...user.other,
          accountFilled: true,
          accountFinishedStep: 'ChooseTemplate',
          template: selected.name === 'Template One' ? 1 : 2,
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
      setValues({ ...updatedData })

      setErrors([])
      history.push(links.DASHBAORD)
    } catch (error) {
      setErrors(['Oops! Something went wrong'])
      console.error(error)
      setErrors([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Layout title="Choose profile template" subtitle="">
        <AnimatedDiv className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:border-gray-700 border border-white dark:bg-gray-800 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">
                Privacy setting
              </RadioGroup.Label>
              <div className="bg-white dark:bg-gray-800 rounded-md space-y-4">
                {settings.map((setting, settingIdx) => (
                  <RadioGroup.Option
                    key={setting.name}
                    value={setting}
                    className={({ checked }) =>
                      classNames(
                        checked
                          ? 'bg-pink-50 dark:bg-gray-800 rounded-md dark:border-pink-700 border-pink-200 z-10'
                          : 'border-gray-200 dark:border-gray-700 rounded-md',
                        'relative items-center justify-between border p-4 transition-all duration-200 flex overflow-hidden cursor-pointer focus:outline-none'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex items-center justify-center">
                          <span
                            className={classNames(
                              checked
                                ? 'bg-pink-600 border-transparent'
                                : 'bg-white border-gray-300',
                              active
                                ? 'ring-2 ring-offset-2 ring-pink-500'
                                : '',
                              'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                            )}
                            aria-hidden="true"
                          >
                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                          </span>
                          <div className="ml-3 flex flex-col items-start">
                            <RadioGroup.Label
                              as="span"
                              className={classNames(
                                checked
                                  ? 'gradient-text'
                                  : 'dark:text-white text-gray-900',
                                'block text-sm font-medium mb-2'
                              )}
                            >
                              {setting.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        <div></div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
            <Button
              loading={loading}
              fullWidth
              label="Next"
              className="mt-4"
              gradient
              onClick={onNext}
            />
            {errors.length > 0 && <Error errors={errors} />}
          </div>
        </AnimatedDiv>
      </Layout>
    </div>
  )
}

export default ChooseTemplate
