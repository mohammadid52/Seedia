/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { HomeIcon, UsersIcon, ColorSwatchIcon } from '@heroicons/react/outline'
import { links } from 'constants/Links'
import { useUserContext } from 'context/UserContext'
import { classNames } from 'utils/classNames'
import { adjustColors } from 'values/values'

export default function Sidebar({ id }: { id?: string }) {
  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, current: true, href: '/dashboard' },
    {
      name: 'Profile',
      icon: UsersIcon,
      current: false,
      children: [
        { name: 'First Template', href: links.getProfileById(id, '1') },
        { name: 'Second Template', href: links.getProfileById(id, '2') },
      ],
    },
    {
      name: 'Adjust colors',
      icon: ColorSwatchIcon,
      current: false,
      children: adjustColors,
    },
  ]
  const { showSidebar } = useUserContext()
  return (
    <div
      style={{ zIndex: 99999 }}
      className={`flex h-screen fixed  transition-all duration-200 ${
        showSidebar ? 'max-w-56 w-full border-r' : 'max-w-0'
      } flex-col flex-grow  dark:border-gray-600 border-gray-200 pt-5 pb-4 bg-white dark:bg-gray-700 overflow-y-auto`}
    >
      <div className="mt-5 flex-grow flex flex-col">
        <nav
          className="flex-1 px-2 space-y-4 bg-white dark:bg-gray-700"
          aria-label="Sidebar"
        >
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href="/#"
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 dark:bg-gray-600 dark:text-white text-gray-900'
                      : 'bg-white dark:bg-gray-600 dark:text-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white dark:bg-gray-600 dark:text-white  text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <a
                          key={subItem.name}
                          // @ts-ignore
                          href={subItem.href}
                          className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium dark:text-gray-300 text-gray-600 rounded-md hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-400 hover:bg-gray-50"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  )
}
