import { InformationCircleIcon } from '@heroicons/react/solid'

const Info = ({
  text,
  color = 'blue',
  className = '',
}: {
  className?: string
  text: string
  color?: string
}) => {
  return (
    <div
      className={`rounded-md dark:bg-transparent dark:border-gray-700 border border-gray-50 bg-${color}-50 p-4 ${className}`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon
            className={`h-5 w-5 dark:text-${color}-300 text-${color}-400`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p
            className={`text-sm pb-0 mb-0 dark:text-${color}-300 text-${color}-700`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Info
