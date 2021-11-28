/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { classNames } from 'utils/classNames'
import map from 'lodash/map'
import { IProduct } from 'interfaces/UniversalInterface'
import { IconType } from 'react-icons/lib'

type Item = {
  id: string
  onClick: (product?: IProduct) => void
  name: string
  Icon?: IconType
}

const Dropdown = ({ list }: { list: Item[] }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-full flex items-center text-gray-400 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-100 focus:ring-yellow-500">
          <span className="sr-only">Open options</span>
          <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ zIndex: 999 }}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            {map(list, (item) => (
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      if (typeof item.onClick === 'function') {
                        item.onClick()
                      }
                    }}
                    className={classNames(
                      active
                        ? 'bg-gray-100 dark:bg-gray-600 dark:text-white text-gray-900'
                        : 'text-gray-700 dark:bg-gray-700 dark:text-white',
                      'items-center px-4 py-2 flex text-sm cursor-pointer'
                    )}
                  >
                    {item.Icon && <item.Icon className="mr-2" />}
                    {item.name}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
