/* This example requires Tailwind CSS v2.0+ */
import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import { useField } from 'formik'
import { orderBy, remove } from 'lodash'
import find from 'lodash/find'
import map from 'lodash/map'
import { Fragment, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { classNames } from 'utils/classNames'

interface Item {
  name: string
  id?: string | number
  code?: string
}

interface SelecterProps {
  list: Item[]
  placeholder?: string
  label?: string
  required?: boolean
  onSelect?: (event: any) => void
  border?: boolean
  className?: string
  name: string
  sortBy?: string
  disableFieldOption?: boolean
  defaultItem?: string
}

const FormMultipleSelector = ({
  list,
  placeholder = '',
  label = '',
  required = false,
  className = '',
  onSelect = () => {},
  border = true,
  name,
  sortBy = 'name',
  defaultItem,
  disableFieldOption = false,
}: SelecterProps) => {
  const [field, meta, helpers] = useField(name)

  const { setTouched, setError, setValue } = helpers
  const [disable, setDisable] = useState(
    disableFieldOption && field.value.length === 0
  )

  const [values, setValues] = useState<any[]>([...field.value])

  const onOptionSelect = (selectedOption: { name: string }) => {
    if (!find(values, ['name', selectedOption.name])) {
      values.push(selectedOption)
    } else {
      remove(values, ['name', selectedOption.name])
    }
    setValues((prev) => [...prev])
    setValue(values)
    setTouched(true)
    setError(undefined)
  }

  return (
    <Listbox {...field} onChange={onOptionSelect}>
      {({ open }) => (
        <div className={className}>
          <div className={'flex items-center space-x-3'}>
            {label && (
              <Listbox.Label className="block dark:text-white text-sm font-medium text-gray-700">
                {label}{' '}
                {required && (
                  <span className="text-red-500 font-medium text-base">*</span>
                )}
              </Listbox.Label>
            )}
            {disableFieldOption && (
              <div className="flex items-center h-5">
                <input
                  checked={!disable}
                  onChange={(e) => setDisable(!e.target.checked)}
                  aria-describedby="disable-field"
                  type="checkbox"
                  className="focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 h-4 w-4 text-yellow-500 border-gray-300 rounded"
                />
              </div>
            )}
          </div>

          <div
            className={classNames(
              'mt-1 relative',
              disable ? 'opacity-50 pointer-events-none' : 'opacity-100'
            )}
          >
            <Listbox.Button
              id="multiple-selector"
              onBlur={() => {
                setError('This field is required')
              }}
              className={`bg-white  dark:bg-gray-900 relative w-full ${
                border ? 'border' : ''
              } dark:border-gray-700 border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
            >
              <span
                className={`flex space-x-4 truncate ${
                  values.length === 0
                    ? 'dark:text-gray-500 text-gray-400 '
                    : 'dark:text-white text-gray-900'
                }`}
              >
                {values.length > 0
                  ? map(orderBy(values, [sortBy, 'asc']), (d, idx) => (
                      <div key={idx} className="flex items-center">
                        {d.code && (
                          <div
                            className={`rounded-full border border-gray-600 h-4 w-4`}
                            style={{ backgroundColor: d.code }}
                          />
                        )}
                        <span>{d.name}</span>
                        {idx !== values.length - 1 && ','}
                      </div>
                    ))
                  : placeholder}
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
                defaultValue={defaultItem ? defaultItem : null}
                static
                className="pl-0 z-10 absolute scroll-dark-md  mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5  overflow-auto focus:outline-none sm:text-sm"
              >
                {list.map((item, idx) => (
                  <Listbox.Option
                    disabled={item.hasOwnProperty('disabled')}
                    key={idx}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'text-white bg-gradient-to-r from-pink-500 to-yellow-500'
                          : 'text-gray-900',
                        'cursor-pointer select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold ' : 'font-normal',
                            'truncate flex items-center justify-between w-full relative dark:text-white text-left'
                          )}
                        >
                          <div className="flex items-center space-x-2">
                            {item.code && (
                              <div
                                className={`rounded-full  h-3 w-3`}
                                style={{ backgroundColor: item.code }}
                              />
                            )}
                            <span>{item.name}</span>
                          </div>
                          {find(values, ['name', item.name]) && (
                            <AiOutlineCheck className="font-bold text-lg" />
                          )}
                        </span>
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
  )
}
export default FormMultipleSelector
