import React, { useState } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { Field } from 'formik'
import {
  AiFillEyeInvisible,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai'

const FormInput = ({
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
  ...props
}: {
  label?: string
  id?: string
  name?: string
  required?: boolean
  type?: string
  placeholder?: string
  error?: string
  value: string
  onChange: () => void
  gridClass?: string
  props?: any
  showPasswordButton?: boolean
}) => {
  const errorClass = `border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
  const [showPass, setShowPass] = useState(false)
  return (
    <div className={gridClass}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}{' '}
        {required && (
          <span className="text-red-500 font-medium text-base">*</span>
        )}
      </label>

      <Field name={name}>
        {(props: any) => {
          const { field, meta } = props

          return (
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id={id}
                  type={
                    showPasswordButton ? (showPass ? 'text' : 'password') : type
                  }
                  className={`block border w-full pr-10 ${
                    error
                      ? errorClass
                      : 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300'
                  } sm:text-sm p-2 rounded-md`}
                  {...field}
                />
                <div className="flex items-center absolute transition-all duration-200 inset-y-0 right-0 pr-3 flex items-center">
                  {meta.touched && meta.error && (
                    <div className=" pointer-events-none">
                      <ExclamationCircleIcon
                        className="h-5 w-5 text-red-500"
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
              {meta.touched && meta.error && (
                <p
                  className="mt-2 transition-all duration-200 text-sm text-red-600"
                  id={`${name || id}-error`}
                >
                  {meta.error}
                </p>
              )}
            </div>
          )
        }}
      </Field>
    </div>
  )
}

export default FormInput