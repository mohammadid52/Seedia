import { useField } from 'formik'
import { useState } from 'react'
import DatepickerModule from 'react-datepicker'

const DatePicker = ({
  name,
  label,
  required,
  optional,
  placeholder,
}: {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  optional?: boolean
}) => {
  const [field, meta, helpers] = useField(name)

  const { setValue } = helpers

  const [startDate, setStartDate] = useState(null)

  const [endDate, setEndDate] = useState(null)

  const onChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    setValue({ from: start, to: end })
  }
  return (
    <div>
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
      <DatepickerModule
        selected={startDate}
        onChange={onChange}
        dateFormat="MMMM d, yyyy"
        startDate={startDate}
        endDate={endDate}
        selectsRange
        calendarClassName="rasta-stripes"
        className="dark:bg-gray-900 rounded-md border focus:ring-yellow-500 focus:border-yellow-500 mt-1 dark:border-gray-700 dark:placeholder-gray-700 dark:text-white"
        popperModifiers={{
          // @ts-ignore
          offset: {
            enabled: true,
            offset: '0px, 0px',
          },
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'scrollParent',
          },
        }}
      />
    </div>
  )
}

export default DatePicker
