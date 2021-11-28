import { Transition } from '@headlessui/react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import FormError from 'components/atoms/form/FormError'
import { useField } from 'formik'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const FormInput = ({
  label,
  id,
  name = '',
  type = 'text',
  placeholder,
  error,
  value = '',

  gridClass,
  required,
  showPasswordButton = false,
  optional = false,
  hideBorders = false,
  textarea = false,
  setUnsavedChanges = () => {},
  withButton,
  disabled,
  rows,
  textClass = 'sm:text-sm',
  cols,
  info = '',
  autoFocus = false,
  ...props
}: {
  label?: string
  id?: string
  name?: string
  required?: boolean
  optional?: boolean
  hideBorders?: boolean
  type?: string
  placeholder?: string
  error?: string
  value?: string

  gridClass?: string
  props?: any
  rows?: number
  cols?: number
  showPasswordButton?: boolean
  textarea?: boolean
  info?: string
  disabled?: boolean
  withButton?: any
  textClass?: string
  autoFocus?: boolean
  setUnsavedChanges?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const errorClass = `border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
  const [showPass, setShowPass] = useState(false)

  const [field, meta, helpers] = useField(name)

  const { setValue } = helpers

  const onChange = (e: any) => {
    setUnsavedChanges(true)
    setValue(e.target.value)
  }

  return (
    <div className={gridClass}>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block dark:text-white text-sm font-medium text-gray-700"
        >
          {label}{' '}
          {required ? (
            <span className="text-red-500 dark:text-red-400 font-medium text-base">
              *
            </span>
          ) : (
            <span className="text-red-500 dark:text-red-400 font-medium text-base"></span>
          )}
        </label>
        {optional && (
          <span className="text-sm text-gray-500" id="email-optional">
            Optional
          </span>
        )}
      </div>

      {textarea ? (
        <div>
          <div className="mt-1 relative rounded-md shadow-sm">
            <textarea
              rows={rows}
              cols={cols}
              autoFocus={autoFocus}
              value={field.value}
              // ref={inputRef}
              id={id}
              placeholder={placeholder}
              onChange={onChange}
              className={`block border w-full pr-2 ${
                error ? errorClass : ''
              } ${textClass} p-2 ${
                hideBorders
                  ? 'border-transparent'
                  : 'dark:border-gray-700 border-gray-300'
              } rounded-md dark:bg-gray-900 transition-all  dark:text-white`}
            />
            <div className="flex items-center absolute transition-all duration-200 top-0 right-0 p-3 ">
              {meta.touched && meta.error && (
                <div className=" pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500 dark:text-red-400"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          </div>
          <FormError
            show={Boolean(meta.touched && meta.error)}
            error={meta.error}
          />
          {/* <Transition
            show={Boolean(meta.touched && meta.error)}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className="mt-2"
          >
            <p
              className="transition-all duration-200 text-sm text-red-600 dark:text-red-500"
              id={`${name || id}-error`}
            >
              {meta.error}
            </p>
          </Transition> */}
        </div>
      ) : (
        <div>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              disabled={disabled}
              id={id}
              // ref={inputRef}
              autoFocus={autoFocus}
              step={type === 'number' ? '0.01' : undefined}
              min={type === 'number' ? '0.1' : undefined}
              onChange={onChange}
              placeholder={placeholder}
              value={field.value}
              type={
                showPasswordButton ? (showPass ? 'text' : 'password') : type
              }
              className={`unstyled block border w-full pr-2 ${
                error ? errorClass : ''
              } sm:text-sm p-2 ${
                hideBorders
                  ? 'border-transparent '
                  : 'dark:border-gray-700 border-gray-300'
              } rounded-md dark:bg-gray-900 dark:text-white`}
              {...props}
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
                <div className="ml-2" onClick={() => setShowPass(!showPass)}>
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
      )}
    </div>
  )
}

export default FormInput
