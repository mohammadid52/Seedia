import { Transition } from '@headlessui/react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { Field } from 'formik'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const FormInput = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  error,
  value = '',
  onChange,
  gridClass,
  required,
  showPasswordButton = false,
  optional = false,
  textarea = false,
  setUnsavedChanges = () => {},
  withButton,
  disabled,
  ...props
}: {
  label?: string
  id?: string
  name?: string
  required?: boolean
  optional?: boolean
  type?: string
  placeholder?: string
  error?: string
  value?: string
  onChange?: () => void
  gridClass?: string
  props?: any
  showPasswordButton?: boolean
  textarea?: boolean
  disabled?: boolean
  withButton?: any
  setUnsavedChanges?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const errorClass = `border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
  const [showPass, setShowPass] = useState(false)

  return (
    <div className={gridClass}>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block dark:text-white text-sm font-medium text-gray-700"
        >
          {label}{' '}
          {required && (
            <span className="text-red-500 dark:text-red-400 font-medium text-base">
              *
            </span>
          )}
        </label>
        {optional && (
          <span className="text-sm text-gray-500" id="email-optional">
            Optional
          </span>
        )}
      </div>

      {textarea ? (
        <Field name={name}>
          {(props: any) => {
            const { field, meta } = props

            return (
              <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <textarea
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    className={`block border w-full pr-10 ${
                      error
                        ? errorClass
                        : 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300'
                    } sm:text-sm p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white`}
                    {...field}
                  />
                </div>
                {meta.touched && meta.error && (
                  <p
                    className="mt-2 transition-all duration-200 text-sm text-red-600 dark:text-red-500"
                    id={`${name || id}-error`}
                  >
                    {meta.error}
                  </p>
                )}
              </div>
            )
          }}
        </Field>
      ) : (
        <Field name={name}>
          {(props: any) => {
            const { field, meta } = props

            return (
              <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    disabled={disabled}
                    id={id}
                    placeholder={placeholder}
                    type={
                      showPasswordButton
                        ? showPass
                          ? 'text'
                          : 'password'
                        : type
                    }
                    className={`block border w-full pr-10 ${
                      error
                        ? errorClass
                        : 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300'
                    } sm:text-sm p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white`}
                    {...field}
                  />
                  <div className="flex items-center absolute transition-all duration-200 inset-y-0 right-0 pr-3 ">
                    {meta.touched && meta.error && (
                      <div className=" pointer-events-none">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500 dark:text-red-400"
                          aria-hidden="true"
                        />
                      </div>
                    )}

                    {showPasswordButton && field.value && (
                      <div
                        className="ml-2"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? (
                          <AiOutlineEyeInvisible
                            className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <AiOutlineEye
                            className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex mt-2 items-center justify-between">
                  <Transition
                    show={Boolean(meta.touched && meta.error)}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <p
                      className="transition-all duration-200 text-sm text-red-600 dark:text-red-500"
                      id={`${name || id}-error`}
                    >
                      {meta.error}
                    </p>
                  </Transition>
                  {!Boolean(meta.touched && meta.error) && <div />}
                  {withButton &&
                  !Boolean(meta.touched && meta.error) &&
                  field.value.length > 3 ? (
                    withButton
                  ) : (
                    <div className="" />
                  )}
                </div>
              </div>
            )
          }}
        </Field>
      )}
    </div>
  )
}

export default FormInput
