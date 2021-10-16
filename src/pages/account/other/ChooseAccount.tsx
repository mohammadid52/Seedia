import { RadioGroup } from '@headlessui/react'
import Error from 'components/alerts/Error'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import Button from 'components/atoms/Button'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { useUserContext } from 'context/UserContext'
import { getAccessToken, network } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { classNames } from 'utils/classNames'

const settings = [
  {
    name: 'Personal',
    description: 'If you are creating account for personal use, select this',
  },
  {
    name: 'Student',
    description: 'If you are student then select this',
  },
  {
    name: 'Business',
    description:
      'If you are creating account for the business then select this',
  },
]

const ChooseAccount = ({ user }: { user?: IParent }) => {
  const [selected, setSelected] = useState(settings[0])
  const history = useHistory()

  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState<string[]>([])

  const { setValues } = useUserContext()

  const onNext = async () => {
    let path
    if (selected.name === 'Personal') {
      path = links.COMPANY
    } else if (selected.name === 'Student') {
      path = links.EDUCATION
    } else {
      path = links.BUSINESS_STEP_1
    }

    try {
      setLoading(true)

      const token = getAccessToken()

      const profileUrl = `${user?.firstName}_${user?.lastName}_${
        user?.myId || user?._id
      }`.toLowerCase()

      const updatedData = {
        ...user,
        profileUrl,
        other: {
          ...user?.other,
          accountFinishedStep: 'chooseAccount',
          accountType: selected.name.toLocaleLowerCase(),
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
      history.push(path)
    } catch (error) {
      setErrors(['Oops! Something went wrong'])
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Layout title="Choose account type" subtitle="">
        <AnimatedDiv className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:border-gray-700 border border-white dark:bg-gray-900 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">
                Privacy setting
              </RadioGroup.Label>
              <div className="bg-white dark:bg-gray-900 rounded-md space-y-4">
                {settings.map((setting, settingIdx) => (
                  <RadioGroup.Option
                    key={setting.name}
                    value={setting}
                    className={({ checked }) =>
                      classNames(
                        checked
                          ? 'bg-pink-50 dark:bg-gray-900 rounded-md dark:border-pink-700 border-pink-200 z-10'
                          : 'border-gray-200 dark:border-gray-700 rounded-md',
                        'relative border p-4 transition-all duration-200 flex overflow-hidden cursor-pointer focus:outline-none'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <span
                          className={classNames(
                            checked
                              ? 'bg-pink-600 border-transparent'
                              : 'bg-white border-gray-300',
                            active ? 'ring-2 ring-offset-2 ring-pink-500' : '',
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
                          <RadioGroup.Description
                            as="span"
                            className={classNames(
                              checked ? 'gradient-text' : 'text-gray-500',
                              'block text-sm'
                            )}
                          >
                            {setting.description}
                          </RadioGroup.Description>
                        </div>
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

export default ChooseAccount
