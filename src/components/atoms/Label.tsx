const Label = ({
  text,
  className,
  required = false,
}: {
  text: string
  className?: string
  required?: boolean
}) => {
  return (
    <label
      className={`block dark:text-white text-sm font-medium text-gray-700 ${className}`}
    >
      {text}{' '}
      {required ? (
        <span className="text-red-500 dark:text-red-400 font-medium text-base">
          *
        </span>
      ) : (
        // to remove white space
        <span className="text-red-500 dark:text-red-400 font-medium text-base"></span>
      )}
    </label>
  )
}

export default Label
