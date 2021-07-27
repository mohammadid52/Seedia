import React from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

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
}) => {
  const errorClass = `border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
  return (
    <div className={gridClass}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}{' '}
        {required && (
          <span className="text-red-500 font-medium text-base">*</span>
        )}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id}
          className={`block border w-full pr-10 ${
            error
              ? errorClass
              : 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300'
          } sm:text-sm rounded-md`}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          aria-invalid="true"
          aria-describedby="email-error"
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${name || id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

export default FormInput
