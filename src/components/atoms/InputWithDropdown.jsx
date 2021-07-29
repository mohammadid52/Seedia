const InputWithDropdown = ({
  label,
  inputType,
  list,
  name,
  id,
  className,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label
        htmlFor="phone-number"
        className="block text-sm font-medium text-gray-700"
      >
        {label}{' '}
        {required && (
          <span className="text-red-500 font-medium text-base">*</span>
        )}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">
            {inputType}
          </label>
          <select
            id="country"
            name="country"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            {list.map((item) => (
              <option>{item.code}</option>
            ))}
          </select>
        </div>
        <input
          type="text"
          name={name}
          id={id}
          className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default InputWithDropdown
