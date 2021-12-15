import { Switch } from '@headlessui/react'
import { classNames } from 'utils/classNames'

const Toggle = ({
  enabled,
  setEnabled,
  text,
  subText,
  className,
}: {
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
  text: string
  subText?: string
  className?: string
}) => {
  return (
    <Switch.Group
      as="div"
      className={`flex items-center justify-between ${className}`}
    >
      <span className="flex-grow flex flex-col items-start">
        <Switch.Label
          as="span"
          className="text-sm font-medium text-white"
          passive
        >
          {text}
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          {subText}
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled
            ? 'bg-gradient-to-r from-pink-500 to-yellow-500'
            : 'bg-gray-900',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
    </Switch.Group>
  )
}
export default Toggle
