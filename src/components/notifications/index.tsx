/* This example requires Tailwind CSS v2.0+ */
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import { useNotifications } from 'context/NotificationContext'
import { Fragment } from 'react'

export default function Notification() {
  const { notification, hideNotification } = useNotifications()

  const { show, title, buttonUrl, buttonText } = notification

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="hidden fixed  inset-x-0 bottom-0 lg:flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-0 flex-1 flex justify-start">
                    <p className=" text-sm font-medium dark:text-white text-gray-900">
                      {title}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    {buttonText && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={buttonUrl}
                        className="mr-4 flex-shrink-0 dark:bg-gray-800 text-link bg-white rounded-md text-sm font-medium hover:underline   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {buttonText}
                      </a>
                    )}
                    <button
                      className="bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={hideNotification}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
