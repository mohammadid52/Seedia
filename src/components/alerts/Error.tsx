import { XCircleIcon } from '@heroicons/react/solid'
import { map } from 'lodash'

const Error = ({ errors }: { errors: string[] }) => {
  return (
    <div className="rounded-md bg-red-50 dark:bg-gray-800 border dark:border-gray-700 border-transparent p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon
            className="h-5 w-5 dark:text-red-300 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800 dark:text-red-500">
            There were {errors.length} errors with your submission
          </h3>
          <div className="mt-2 text-sm text-red-700 dark:text-red-400">
            <ul className="list-disc pl-5 space-y-1">
              {map(errors, (error) => (
                <li>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
