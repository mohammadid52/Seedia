import DatepickerModule from 'react-datepicker'

const DatePicker = ({
  date,
  setDate,
  name,
  label,
  required,
  optional,
  placeholder,
  className = '',
  minDate,
  maxDate,
  showMonthYearPicker = true,
  additionanProps,
}: {
  date: any
  setDate: any
  name?: string
  label?: string
  placeholder?: string
  required?: boolean
  showMonthYearPicker?: boolean
  optional?: boolean
  className?: string
  maxDate?: any
  minDate?: any
  additionanProps?: any
}) => {
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
        {...additionanProps}
        required
        selectsStart
        dateFormat="dd/MM/yyyy"
        showMonthYearPicker={showMonthYearPicker}
        selected={date}
        onChange={(date) => setDate(date)}
        // minDate={new Date()}
        showPopperArrow={false}
        placeholderText={placeholder}
        minDate={minDate}
        maxDate={maxDate}
        calendarClassName="rasta-stripes"
        className={`dark:bg-gray-900 rounded-md border dark:border-gray-700 dark:placeholder-gray-700 dark:text-white ${className}`}
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
