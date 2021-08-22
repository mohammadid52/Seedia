import { useState } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

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
  onChange: (e: any) => void
  gridClass?: string
  props?: any
  showPasswordButton?: boolean
  fullWidth?: boolean
  textarea?: boolean
  rows?: number
  cols?: number
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
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              rows={rows}
              cols={cols}
              className={`block border w-full pr-10 ${
                error
                  ? errorClass
                  : 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300'
              } sm:text-sm p-2 rounded-md dark:placeholder-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${className}`}
            />
          ) : (
            <input
              {...props}
              id={id}
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
              } sm:text-sm p-2 rounded-md dark:placeholder-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${className}`}
            />
          )}

          <div className="flex items-center absolute transition-all duration-200 inset-y-0 right-0 pr-3 ">
            {error && (
              <div className=" pointer-events-none">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500 dark:text-red-400"
                  aria-hidden="true"
                />
              </div>
            )}
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
        {error && (
          <p
            className="mt-2 transition-all duration-200 text-sm text-red-600 dark:text-red-500"
            id={`${name || id}-error`}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  )
}

export default NormalFormInput
