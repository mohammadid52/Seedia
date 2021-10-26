import { useState } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import {
  AiFillCheckCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai'
import { Transition } from '@headlessui/react'
import { doResize } from 'utils/functions'

const NormalFormInput = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  error,
  value,
  onChange,
  gridClass,
  required,
  showPasswordButton = false,
  optional = false,
  fullWidth = false,
  textarea = false,
  className = '',
  rows = 4,
  cols = 100,
  autoComplete = true,
  success = null,
  info = '',
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
  className?: string
  value: string | undefined
  success?: boolean | null
  onChange: (e: any) => void
  gridClass?: string
  props?: any
  showPasswordButton?: boolean
  fullWidth?: boolean
  autoComplete?: boolean
  textarea?: boolean
  rows?: number
  cols?: number
  info?: string
}) => {
  const errorClass = `border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
  const [showPass, setShowPass] = useState(false)
  return (
    <div className={`${gridClass} ${fullWidth ? 'w-full' : ''}`}>
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

      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          {textarea ? (
            <textarea
              {...props}
              id={id}
              value={value}
              onKeyDown={doResize}
              onKeyPress={doResize}
              onKeyUp={doResize}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              rows={rows}
              cols={cols}
              className={`block border w-full pr-10 ${
                error
                  ? errorClass
                  : 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300'
              } sm:text-sm p-2 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 dark:text-white ${className}`}
            />
          ) : (
            <input
              {...props}
              id={id}
              autoComplete={autoComplete ? 'true' : 'false'}
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              type={
                showPasswordButton ? (showPass ? 'text' : 'password') : type
              }
              className={`block border w-full pr-10 ${
                error
                  ? errorClass
                  : 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300'
              } sm:text-sm p-2 rounded-md transition-all dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 dark:text-white ${className}`}
            />
          )}

          <div className="flex items-center absolute transition-all duration-200 inset-y-0 right-0 pr-3 ">
            {error ? (
              <div className=" pointer-events-none">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500 dark:text-red-400"
                  aria-hidden="true"
                />
              </div>
            ) : success !== null && success === true ? (
              <div className=" pointer-events-none">
                <AiFillCheckCircle
                  className="h-5 w-5 text-green-500 dark:text-gren-400"
                  aria-hidden="true"
                />
              </div>
            ) : null}

            {showPasswordButton && value && (
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

        {info && (
          <p
            className="transition-all mt-1 duration-200 text-sm text-right text-gray-600 dark:text-gray-500"
            id={`${name || id}-info`}
          >
            {info}
          </p>
        )}

        <Transition
          show={Boolean(error)}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          className="mt-1"
          leaveTo="transform scale-95 opacity-0"
        >
          <p
            className="transition-all duration-200 text-sm text-red-600 dark:text-red-500"
            id={`${name || id}-error`}
          >
            {error}
          </p>
        </Transition>
      </div>
    </div>
  )
}

export default NormalFormInput
