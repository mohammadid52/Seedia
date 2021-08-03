import Layout from 'containers/Layout'
import React from 'react'
import { classNames } from 'utils/classNames'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Button from 'components/atoms/Button'
import { wait } from 'utils/wait'
import { useHistory } from 'react-router-dom'
import { links } from 'constants/Links'
import TextButton from 'components/atoms/TextButton'
import { useUserContext } from 'context/UserContext'

const settings = [
  {
    name: 'Personal',
    description: 'This project would be available to anyone who has the link',
  },
  {
    name: 'Student',
    description: 'Only members of this project would be able to access',
  },
  {
    name: 'Business',
    description: 'You are the only one able to access this project',
  },
]

const ChooseAccount = () => {
  const [selected, setSelected] = useState(settings[0])
  const history = useHistory()
  const { setValues, values } = useUserContext()

  const [loading, setLoading] = useState(false)
  const onNext = () => {
    let path
    if (selected.name === 'Personal') {
      path = links.PERSONAL_STEP_1
    } else if (selected.name === 'Student') {
      path = links.STUDENT_STEP_1
    } else {
      path = links.BUSINESS_STEP_1
    }
    setLoading(true)
    setValues({
      ...values,
      accountType: selected.name,
    })
    wait(1000).then(() => {
      setLoading(false)
      history.push(path || links.PERSONAL_STEP_1)
    })
  }

  return (
    <div>
      <Layout title="Choose account type" subtitle="">
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">
                Privacy setting
              </RadioGroup.Label>
              <div className="bg-white rounded-md space-y-4">
                {settings.map((setting, settingIdx) => (
                  <RadioGroup.Option
                    key={setting.name}
                    value={setting}
                    className={({ checked }) =>
                      classNames(
                        settingIdx === 0 ? 'rounded-md' : '',
                        settingIdx === settings.length - 1 ? 'rounded-md' : '',
                        checked
                          ? 'bg-pink-50 border-pink-200 z-10'
                          : 'border-gray-200',
                        'relative border p-4 transition-all duration-200 flex cursor-pointer focus:outline-none'
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
                              checked ? 'gradient-text' : 'text-gray-900',
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
          </div>
          <TextButton
            onClick={history.goBack}
            text="Go back"
            className="inline-block mt-4"
          />
        </div>
      </Layout>
    </div>
  )
}

export default ChooseAccount
