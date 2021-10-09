import { Transition } from '@headlessui/react'

const FormError = ({ show, error }: { show: boolean; error: string }) => {
  return (
    <Transition
      show={show}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      className="mt-2"
    >
      <p className="transition-all duration-200 text-sm text-red-600 dark:text-red-500">
        {error}
      </p>
    </Transition>
  )
}

export default FormError
