import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { noop } from 'lodash'

const Modal = ({
  open = false,
  setOpen,
  children,
  header,
  onClose,
  disableBackdropClose = true,
  hideCloseBtn = false,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
  header?: string

  disableBackdropClose?: boolean
  hideCloseBtn?: boolean
  onClose?: () => void
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        style={{ zIndex: 9999 }}
        className="fixed inset-0 overflow-y-auto"
        open={open}
        onClose={!disableBackdropClose ? (onClose ? onClose : setOpen) : noop}
      >
        <div
          className={`pb-20 flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0`}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed dark:bg-black inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={`inline-block align-bottom  bg-white dark:bg-gray-900 rounded-lg px-4 pt-5  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:p-6 pb-4`}
            >
              {!hideCloseBtn && (
                <div className="hidden sm:block absolute top-0 right-0 pt-6 pr-6">
                  <button
                    type="button"
                    className="bg-white dark:bg-gray-900 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    onClick={() => (onClose ? onClose() : setOpen(false))}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              )}
              <div>
                {header && (
                  <div className="modal-header divider dark:divider ">
                    <h3 className="dark:text-white text-gray-900 text-2xl font-semibold">
                      {header}
                    </h3>
                  </div>
                )}
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Modal
