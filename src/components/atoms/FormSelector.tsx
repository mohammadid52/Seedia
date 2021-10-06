/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { classNames } from 'utils/classNames'
import { useField } from 'formik'

interface SelecterProps {
  list: { name: string; id?: string }[]
  placeholder?: string
  label?: string
  required?: boolean
  selectedItem?: string
  onSelect?: (event: any) => void
  border?: boolean
  name: string
  setUnsavedChanges?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

const FormSelector = ({
  list,
  placeholder = '',
  label = '',
  required = false,
  selectedItem,
  onSelect = () => {},
  border = true,
  name,
  className = '',
  setUnsavedChanges,
}: SelecterProps) => {
  const [field, meta, helpers] = useField(name)

  const { setValue, setTouched, setError } = helpers

  const onOptionSelect = (selectedOption: { name: string }) => {
    setValue(selectedOption.name)
    onSelect(selectedOption)
    setTouched(true)
    setError(undefined)
    if (typeof setUnsavedChanges === 'function') {
      setUnsavedChanges(true)
    }
  }

  return (
    <Listbox {...field} onChange={onOptionSelect}>
      {({ open }) => (
        <div className={className}>
          {label && (
            <Listbox.Label className="block dark:text-white text-sm font-medium text-gray-700">
              {label}{' '}
              {required && (
                <span className="text-red-500 font-medium text-base">*</span>
              )}
            </Listbox.Label>
          )}
          <div className="mt-1 relative">
            <Listbox.Button
              onBlur={() => {
                setError('This field is required')
              }}
              className={`bg-white dark:bg-gray-800 relative w-full ${
                border ? 'border' : ''
              } dark:border-gray-700 border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
            >
              <span
                className={`block truncate ${
                  !field.value
                    ? 'dark:text-gray-500 text-gray-400 '
                    : 'dark:text-white text-gray-900'
                }`}
              >
                {field.value.length > 0
                  ? field.value
                  : selectedItem || placeholder}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            {meta.touched && meta.error && (
              <p
                className="mt-2 transition-all duration-200 text-sm text-red-600 dark:text-red-500"
                id={`${name}-error`}
              >
                {meta.error}
              </p>
            )}

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="pl-0 absolute scroll-dark-md z-10 mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {list.map((item, idx) => (
                  <Listbox.Option
                    disabled={item.hasOwnProperty('disabled')}
                    key={item.name + idx}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'text-white bg-gradient-to-r from-pink-500 to-yellow-500'
                          : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold ' : 'font-normal',
                            'block truncate dark:text-white text-left'
                          )}
                        >
                          {item.name}
                        </span>

                        {selected ? (
                          <CheckIcon
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4 h-5 w-5'
                            )}
                            aria-hidden="true"
                          />
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
    //     )
    //   }}
    // </Field>
  )
}
export default FormSelector
